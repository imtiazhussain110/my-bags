import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProductDetailWrapper = styled(Box)(() => ({
  display: "flex",
  padding: "32px",
}));
export const ProductDetailInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
  [theme.breakpoints.down("md")]: {
    maxWidth: "80%",
    marginTop: 10,
    marginLeft: "-50px",
  },
  marginBottom: 4,
}));
