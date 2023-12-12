import React, { createContext, useContext,useMemo, useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";

import { customShadows } from "./custom-shadows";
import { overrides } from "./overrides";
import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography";

// ----------------------------------------------------------------------
const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
// ----------------------------------------------------------------------

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
  };

  const memoizedValue = useMemo(
    () => ({
      palette: palette(mode),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
      toggleMode,
      mode,
    }),
    [mode],
  );

  const theme = createTheme(memoizedValue);

  theme.components = overrides(theme);

  return (
    <ThemeContext.Provider value={useMemo(() => ({ toggleMode, mode }), [toggleMode, mode])}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
