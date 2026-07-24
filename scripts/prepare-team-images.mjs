import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const outputDirectory = path.join(projectRoot, "public", "assets", "team");
const images = [
  {
    source: "WhatsApp Image 2026-06-16 at 17.42.49.jpeg",
    output: "strategic-manager-primary.webp",
    width: 1400,
  },
  {
    source: "WhatsApp Image 2026-06-16 at 17.42.48.jpeg",
    output: "strategic-manager-secondary.webp",
    width: 900,
  },
];

await mkdir(outputDirectory, { recursive: true });

for (const image of images) {
  const source = path.join(projectRoot, image.source);
  const output = path.join(outputDirectory, image.output);
  const metadata = await sharp(source).metadata();

  await sharp(source)
    .rotate()
    .resize({ width: Math.min(image.width, metadata.width ?? image.width), withoutEnlargement: true })
    .webp({ quality: 86, effort: 5 })
    .toFile(output);

  console.log(`CREATE ${image.output}`);
}
