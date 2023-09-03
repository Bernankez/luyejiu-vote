import type { GlobalThemeOverrides } from "naive-ui";
import { primary } from "./color";

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: primary[600],
    primaryColorHover: primary[500],
    primaryColorPressed: primary[700],
  },
};
