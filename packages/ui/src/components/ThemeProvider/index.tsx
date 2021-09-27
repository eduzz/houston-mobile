import React, { memo, useEffect } from "react";

import { setTheme } from "../../hooks/useTheme";

interface IProps {
  children: JSX.Element;
  theme?: "auto" | "dark" | "light";
}

const ThemeProvider = ({ children, theme = "auto" }: IProps) => {
  useEffect(() => setTheme(theme), [theme]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default memo(ThemeProvider);
