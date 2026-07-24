import { spawn } from "node:child_process";
import { mkdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import ffmpegPath from "ffmpeg-static";

const projectRoot = process.cwd();
const portfolioConfig = path.join(projectRoot, "src", "config", "portfolio.ts");
const posterDirectory = path.join(projectRoot, "public", "assets", "portfolio-posters");
const source = await readFile(portfolioConfig, "utf8");
const cases = [...source.matchAll(/id:\s*"([^"]+)"[\s\S]*?video:\s*"([^"]+)"/g)].map(
  ([, id, video]) => ({ id, video }),
);

if (!ffmpegPath) {
  throw new Error("ffmpeg-static не предоставил путь к исполняемому файлу.");
}

await mkdir(posterDirectory, { recursive: true });

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const process = spawn(ffmpegPath, args, { stdio: ["ignore", "ignore", "pipe"] });
    let errorOutput = "";
    process.stderr.on("data", (chunk) => {
      errorOutput += chunk.toString();
    });
    process.on("error", reject);
    process.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(errorOutput.trim() || `ffmpeg завершился с кодом ${code}`));
    });
  });
}

let created = 0;
let skipped = 0;

for (const portfolioCase of cases) {
  const videoPath = path.join(
    projectRoot,
    "public",
    ...portfolioCase.video.replace(/^\//, "").split("/"),
  );
  const outputPath = path.join(posterDirectory, `${portfolioCase.id}.webp`);
  const videoStat = await stat(videoPath);
  const outputStat = await stat(outputPath).catch(() => null);

  if (outputStat && outputStat.mtimeMs >= videoStat.mtimeMs) {
    console.log(`SKIP  ${portfolioCase.id}: poster актуален`);
    skipped += 1;
    continue;
  }

  await runFfmpeg([
    "-y",
    "-ss",
    "0.25",
    "-i",
    videoPath,
    "-frames:v",
    "1",
    "-vf",
    "scale='min(1280,iw)':-2",
    "-c:v",
    "libwebp",
    "-quality",
    "82",
    outputPath,
  ]);
  const resultStat = await stat(outputPath);
  console.log(`CREATE ${portfolioCase.id}: ${Math.round(resultStat.size / 1024)} KB`);
  created += 1;
}

console.log(`Готово: создано ${created}, пропущено ${skipped}, всего ${cases.length}.`);
