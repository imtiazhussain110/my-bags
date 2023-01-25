import { Box, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Colors } from "../../theme";

export const AppBarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

export const AppBarHeader = styled(Typography)(() => ({
  padding: "4px",
  fontSize: "4rem",
  flexGrow: 1,
  fontFamily: `Montez, cursive`,
  color: Colors.secondary,
}));

export const AppBarMenuList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionsIconContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`,
}));

export const ActionsIconContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));
