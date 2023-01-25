import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import AppBarDesktop from "./AppBarDesktop";
import AppBarMobile from "./AppBarMobile";

function AppBar() {
  const theme = useTheme();
  const mode = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>{mode ? <AppBarMobile mode={mode} /> : <AppBarDesktop mode={mode} />}</>
  );
}

export default AppBar;
