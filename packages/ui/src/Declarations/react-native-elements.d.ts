import "react-native-elements";
import type { FontSize, FontWeight } from "../Interfaces/typography";

export type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module "react-native-elements" {
  export type darkMode = boolean;

  export interface Colors {
    background?: string;
    border?: string;
    text?: string;
    card?: string;
    link?: string;
    borderRadius?: number;
  }

  export interface Typography {
    fontSize: FontSize;
    fontWeight: FontWeight;
  }

  export interface Spacing {
    unit: number;
  }

  export interface Borders {
    borderRadius?: number;
  }

  export interface FullTheme {
    darkMode: boolean;
    colors: RecursivePartial<Colors>;
    typography: RecursivePartial<Typography>;
    spacing: RecursivePartial<Spacing>;
    borders: RecursivePartial<Borders>;
  }
}
