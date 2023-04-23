import { defineConfig, presetIcons, presetUno, transformerDirectives } from "unocss";
import { primary } from "@/styles/color";

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      primary,
    },
  },
});
