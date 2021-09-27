import { Dimensions, PixelRatio } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { IS_ANDROID } from "~/config";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH > 700 ? 1.4 : SCREEN_WIDTH / 320;

export function screenScaleOld(size: number) {
  const newSize = size * (IS_ANDROID ? scale * 0.9 : scale * 0.95);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function screenScale(size: number) {
  return RFValue(size);
}
