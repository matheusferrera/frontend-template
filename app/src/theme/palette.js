import { alpha } from "@mui/material/styles";

export function palette(mode) {
  const isDark = mode === "dark";

  const grey = {
    0: "#FFFFFF",
    100: "#FAFAFA", //"#F9FAFB",
    200: isDark ? "#333333" : "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#CCCCCC", // "#637381",
    601: "#888888",
    700: "#454F5B",
    800: "#333333", // "#212B36",
    900: "#161C24",
  };

  const primary = {
    lighter: "#D0ECFE",
    light: "#73BAFB",
    main: isDark ? "#FFF333" : "#1351B4",
    dark: isDark ? "#FFF333" : "#071D41",
    darker: "#042174",
    contrastText: "#FFFFFF",
  };

  const secondary = {
    lighter: "#EFD6FF",
    light: "#C684FF",
    main: "#8E33FF",
    dark: "#5119B7",
    darker: "#27097A",
    contrastText: "#FFFFFF",
  };

  const info = {
    lighter: "#CAFDF5",
    light: "#61F3F3",
    main: "#00B8D9",
    dark: "#006C9C",
    darker: "#003768",
    contrastText: "#FFFFFF",
  };

  const success = {
    lighter: "#C8FAD6",
    light: "#5BE49B",
    main: "#00A76F",
    dark: "#007867",
    darker: "#004B50",
    contrastText: "#FFFFFF",
  };

  const warning = {
    lighter: "#FFF5CC",
    light: "#FFD666",
    main: "#FFAB00",
    dark: "#B76E00",
    darker: "#7A4100",
    contrastText: grey[800],
  };

  const error = {
    lighter: "#FFE9D5",
    light: "#FFAC82",
    main: "#FF5630",
    dark: "#B71D18",
    darker: "#7A0916",
    contrastText: "#FFFFFF",
  };

  const common = {
    black: "#000000",
    white: "#FFFFFF",
  };

  const action = {
    hover: alpha(grey[500], 0.08),
    selected: alpha(grey[500], 0.16),
    disabled: alpha(grey[500], 0.8),
    disabledBackground: alpha(grey[500], 0.24),
    focus: alpha(grey[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
    active: isDark ? "#FFFFFF" : grey[600],
  };

  const text = {
    primary: isDark ? "#FFFFFF" : "#111111",
    secondary: isDark ? "#000000" : "#FFFFFF",
    disabled: isDark ? grey[300] : grey[500],
    grey: isDark ? grey[300] : grey[601],
  };

  const background = {
    paper: isDark ? "#272727" : "#FFFFFF",
    default: isDark ? "#000000" : "#FAFAFA",
    neutral: isDark ? "#272727" : grey[200],
    dark: isDark ? "#000000" : "#071D41",
  };

  const border = {
    layout: isDark ? "1px solid #FFFFFF" : "",
    card: isDark ? "1px solid #FFFFFF" : "1px solid #9E9E9E",
  };

  const base = {
    primary,
    secondary,
    info,
    text,
    border,
    background,
    success,
    warning,
    error,
    grey,
    common,
    divider: alpha("rgb(155, 155, 155)", 0.2),
    action,
  };

  return {
    ...base,
    mode: isDark ? "dark" : "light",
  };
}
