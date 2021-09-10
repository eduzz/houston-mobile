import * as React from "react";
import {
  Text as RNEText,
  makeStyles,
  TextProps as RNETextProps,
} from "react-native-elements";

import type { FontSize, FontWeight } from "../../Interfaces/typography";

interface TextProps {
  size?: keyof FontSize;
  weight?: keyof FontWeight;
  children?: any;
}

const Text = ({
  size,
  weight,
  children,
  ...props
}: TextProps & RNETextProps) => {
  const styles = useStyles({ size, weight });

  return (
    <RNEText style={styles.textStyle} {...props}>
      {children}
    </RNEText>
  );
};

const useStyles = makeStyles(
  (theme, { size = "default", weight = "regular" }: TextProps) => ({
    textStyle: {
      color: theme.colors?.text,
      fontSize: (theme.typography?.fontSize ?? {})[size],
      fontWeight: (theme.typography?.fontWeight ?? {})[weight],
    },
  })
);

export default Text;
