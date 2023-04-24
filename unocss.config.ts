import { defineConfig, presetIcons, presetUno, transformerDirectives } from "unocss";
import { deepOrange, gray, primary, red, yellow } from "./src/styles/color";

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      primary,
      gray,
      deepOrange,
      yellow,
      red,
    },
  },
});
