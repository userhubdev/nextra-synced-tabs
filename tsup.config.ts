import { defineConfig } from "tsup";
import tsconfig from "./tsconfig.json";

export default defineConfig({
  name: "nextra-synced-tabs",
  entry: ["src/index.tsx"],
  format: "esm",
  dts: true,
  clean: true,
  minify: true,
  outExtension: () => ({ js: ".js" }),
  target: tsconfig.compilerOptions.target,
});
