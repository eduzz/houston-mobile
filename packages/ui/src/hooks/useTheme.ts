import { useCallback, useState } from "react";
import { Appearance } from "react-native";

import { darkTheme, IHoustonTheme, lightTheme } from "../assets/theme";

type ThemeType = "auto" | "dark" | "light";

export const [currentTheme, setCurrentTheme] = useState<ThemeType>("auto");

export function setTheme(theme: ThemeType) {
  return useCallback(() => setCurrentTheme(theme), [currentTheme]);
}

export default function useTheme(): IHoustonTheme {
  switch (
    currentTheme === "auto" ? Appearance.getColorScheme() : currentTheme
  ) {
    case "light":
      return lightTheme;

    case "dark":
      return darkTheme;

    default:
      return lightTheme;
  }
}
