import { DependencyList, useMemo } from "react";
import type { ImageStyle, TextStyle, ViewStyle } from "react-native";

import type { IHoustonTheme } from "../assets/theme";
import useTheme from "./useTheme";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export default function useStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  styles: (theme: IHoustonTheme) => T,
  deps: DependencyList = []
): T {
  const theme = useTheme();

  return useMemo(() => {
    return styles(theme);
  }, [theme, ...deps]);
}
