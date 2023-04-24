import type { GlobalThemeOverrides } from "naive-ui";
import { primary } from "./color";

export const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: primary[500],
    primaryColorHover: primary[400],
    primaryColorPressed: primary[600],
  },
};
