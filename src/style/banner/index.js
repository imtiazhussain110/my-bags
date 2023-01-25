import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../../theme";

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: 0,
  width: "100%",
  height: "100%",
  background: Colors.light_gray,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerImage = styled("img")(({ theme, src }) => ({
  src: `url(${src})`,
  width: "500px",
  [theme.breakpoints.down("md")]: {
    width: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
    height: "300px",
  },
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 360,
  padding: "30px",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "72px",
  marginBottom: "20px",
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    fontSize: "50px",
    letterSpacing: 0.75,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));
export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3rem",
  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5rem",
  },
}));
