import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../theme";

export const SliderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  padding: "20px 0",
  overflow: "hidden",
  background: Colors.secondary,
  [theme.breakpoints.up("md")]: {
    padding: "40px 0",
  },
}));

export const SliderText = styled(Typography)(({ theme }) => ({
  fontFamily: `Montez, cursive`,
  color: Colors.white,
  fontSize: "1.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
}));
