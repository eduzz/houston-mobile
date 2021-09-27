import { PixelRatio } from "react-native";
import device from "react-native-device-info";
import defaultColors from "react-native-elements/dist/config/colors";
import { getStatusBarHeight } from "react-native-status-bar-height";

import type { IHoustonTheme } from ".";
import * as statusColors from "./status";

import { IS_IOS } from "~/config";
import { screenScale } from "~/helpers/screenScale";

export const palette = {
  white: "#ffffff",
  black: "#000000",
  button: {
    light: "#4ec485",
    main: "#009358",
    dark: "#00642e",
    contrastText: "#fff",
  },
  primary: {
    light: "#3f5295",
    main: "#002a67",
    dark: "#00003c",
    contrastText: "#fff",
  },
  secondary: {
    light: "#ffe674",
    main: "#f6b443",
    dark: "#bf8506",
    contrastText: "#fff",
  },
  success: {
    lighter: "#d2ebd3",
    light: "#80e27e",
    main: "#4caf50",
    dark: "#087f23",
    contrastText: "#fff",
  },
  error: {
    lighter: "#fdd9d7",
    light: "#e36372",
    main: "#ad3147",
    dark: "#780020",
    contrastText: "#fff",
  },
  warning: {
    lighter: "#fef4d4",
    light: "#ffde4a",
    main: "#e5ad00",
    dark: "#ae7e00",
    contrastText: "#37474F",
  },
  info: {
    light: "#63ccff",
    main: "#039BE5",
    dark: "#006db3",
    contrastText: "#fff",
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    1000: "#161616",
  },
};

export const light: IHoustonTheme = {
  isDark: false,
  statusBar: {
    height: getStatusBarHeight(),
    iosStyle: "dark-content",
    androidBlack: device.getApiLevelSync() < 23,
  },
  fontFamily: IS_IOS ? "System" : "Roboto",
  units: {
    borderRadius: 8,
    padding: 16,
    borderWidth: 4 / PixelRatio.getPixelSizeForLayoutSize(1),
    borderWidthThin: 2 / PixelRatio.getPixelSizeForLayoutSize(1),
  },
  statusHelper: {
    text: (color: string) => ({
      color,
      fontSize: screenScale(11),
      marginTop: 5,
      textTransform: "uppercase",
      fontWeight: "bold",
      maxWidth: screenScale(100),
      textAlign: "right",
    }),
    bar: (backgroundColor: string) => ({
      position: "absolute",
      right: IS_IOS ? 0 : 1,
      top: 0,
      bottom: -1,
      width: 6,
      backgroundColor,
    }),
  },
  palette,
  colors: {
    ...defaultColors,
    primary: palette.button.main,
    secondary: palette.primary.main,
    accent: palette.secondary.main,

    success: palette.success.main,
    info: palette.info.main,
    error: palette.error.light,
    warning: palette.warning.main,

    backgroundDefault: palette.white,
    backgroundHome: palette.grey[100],
    backgroundGrey: palette.grey[100],
    backgroundCard: palette.white,

    title: palette.grey[800],
    text: palette.grey[800],
    textDark: palette.grey[1000],
    textLight: palette.grey[800],
    textLighter: palette.grey[600],

    border: palette.grey[200],
    borderInput: palette.grey[300],
    spinner: palette.grey[800],

    headerBackground: palette.white,
    inputBackground: palette.white,
    inputBackgroundDarker: palette.white,

    checkboxUncheckedColor: palette.grey[200],
    checkboxCheckedColor: palette.button.main,
    shadow: palette.black,
    shadowOpacity: "rgba(0,0,0,0.5)",

    inputLabel: palette.grey[800],

    salesStatus: statusColors.getSalesStatusColor(false),
    ticketStatus: statusColors.getTicketStatusColor(false),
    transferStatus: statusColors.getTransferStatusColor(),
    moderationStatus: statusColors.getModerationStatusColor(false),
    bankStatus: statusColors.getBankStatusColor(false),
    contractStatus: statusColors.getContractStatusColor(false),
    belt: statusColors.getBeltColor(),
  },
};

export const dark: IHoustonTheme = {
  ...light,
  isDark: true,
  statusBar: {
    ...light.statusBar,
    iosStyle: "light-content",
  },
  colors: {
    ...light.colors,
    primary: palette.button.main,
    secondary: palette.primary.main,
    accent: palette.secondary.main,

    success: palette.success.dark,
    info: palette.info.dark,
    error: palette.error.main,
    warning: palette.warning.light,

    backgroundDefault: palette.black,
    backgroundHome: palette.black,
    backgroundGrey: palette.grey[900],
    backgroundCard: palette.grey[1000],

    title: palette.grey[300],
    text: palette.grey[300],
    textDark: palette.grey[100],
    textLight: palette.grey[400],
    textLighter: palette.grey[600],

    border: palette.grey[900],
    borderInput: palette.grey[900],
    spinner: palette.grey[100],

    headerBackground: palette.black,
    inputBackground: palette.grey[900],
    inputBackgroundDarker: palette.grey[1000],

    checkboxUncheckedColor: palette.grey[800],
    checkboxCheckedColor: palette.button.main,
    shadow: palette.black,

    inputLabel: palette.grey[400],
  },
};
