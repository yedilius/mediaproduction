import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  globalIgnores([
    ".next/**",
    "dist/**",
    "node_modules/**",
    "coverage/**",
    "src/main.tsx",
    "src/app/App.tsx",
    "src/components/About/**",
    "src/components/Contact/**",
    "src/components/Equipment/**",
    "src/components/Experience/**",
    "src/components/Footer/**",
    "src/components/Header/**",
    "src/components/Hero/**",
    "src/components/Niches/**",
    "src/components/Projects/**",
    "src/components/Services/**",
    "src/components/Stories/**",
    "src/components/UI/**",
    "src/data/**",
    "src/hooks/**",
    "src/utils/**",
  ]),
]);
