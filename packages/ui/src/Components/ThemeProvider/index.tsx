import * as React from "react";
import {
  FullTheme,
  ThemeProvider as RNEThemeProvider,
} from "react-native-elements";

import type { RecursivePartial } from "../../Declarations/react-native-elements";
import { baseTheme } from "../../theme";

interface ThemeProviderProps {
  theme?: RecursivePartial<FullTheme>;
  children?: any;
}

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return (
    <RNEThemeProvider
      theme={{
        ...baseTheme,
        ...theme,
        colors: {
          ...baseTheme.colors,
          ...theme?.colors,
        },
        spacing: {
          ...baseTheme.spacing,
          ...theme?.spacing,
        },
        borders: {
          ...baseTheme.borders,
          ...theme?.borders,
        },
        typography: {
          fontSize: {
            ...baseTheme.typography?.fontSize,
            ...theme?.typography?.fontSize,
          },
          fontWeight: {
            ...baseTheme.typography?.fontWeight,
            ...theme?.typography?.fontWeight,
          },
        },
      }}
    >
      {children}
    </RNEThemeProvider>
  );
};

export default ThemeProvider;
