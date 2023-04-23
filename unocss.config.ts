import { defineConfig, presetIcons, presetUno, transformerDirectives } from "unocss";
import { primary } from "./src/styles/color";

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      primary,
    },
  },
});
