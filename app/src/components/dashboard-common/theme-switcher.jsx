import React from "react";

import IconButton from "@mui/material/IconButton";

import { useTheme } from "../../theme";
import Iconify from "../iconify";

// ----------------------------------------------------------------------

export default function ThemeSwitcher() {
  const { toggleMode, mode } = useTheme();

  const handleOnClick = () => {
    toggleMode();
  };

  return (
    <IconButton
      color={"default"}
      onClick={handleOnClick}
    >
      <Iconify
        width={24}
        icon={mode === "dark" ? "solar:sun-bold" : "solar:moon-bold"}
      />
    </IconButton>
  );
}
