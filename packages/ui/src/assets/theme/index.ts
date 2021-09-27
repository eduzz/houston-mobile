import { TextStyle, ViewStyle } from "react-native";
import { FullTheme } from "react-native-elements";

import { palette, dark, light } from "./colors";

export interface IHoustonTheme {
  isDark: boolean;
  statusBar: {
    height: number;
    iosStyle: "dark-content" | "light-content";
    androidBlack: boolean;
  };
  fontFamily: string;
  units: {
    borderRadius: number;
    padding: number;
    borderWidth: number;
    borderWidthThin: number;
  };
  // statusHelper: {
  //   text: (color: string) => TextStyle;
  //   bar: (color: string) => ViewStyle;
  // };
  palette: typeof palette;
  colors: {
    info: string;
    accent: string;

    backgroundDefault: string;
    backgroundHome: string;
    backgroundCard: string;
    backgroundGrey: string;

    headerBackground: string;
    inputBackground: string;
    inputBackgroundDarker: string;

    border: string;
    borderInput: string;

    checkboxUncheckedColor: string;
    checkboxCheckedColor: string;

    shadow: string;
    shadowOpacity: string;

    spinner: string;

    title: string;
    text: string;
    textDark: string;
    textLight: string;
    textLighter: string;

    inputLabel: string;
  };
}

export const darkTheme: IHoustonTheme = dark;
export const lightTheme: IHoustonTheme = light;
