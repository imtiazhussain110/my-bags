import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import bannerImg from "../../images/banner.png";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../style/banner";
import { Colors } from "../../theme";

function Banner() {
  const theme = useTheme();
  const mode = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage src={bannerImg} />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescription variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
          enim minima. Alias ducimus expedita laudantium vero dignissimos
          deserunt et error.
        </BannerDescription>
        <Button
          size="large"
          variant="contained"
          sx={{
            p: "20px 0",
            fontWeight: 700,
            "&:hover": { background: "#703449" },
          }}
        >
          SHOP NOW
        </Button>
      </BannerContent>
    </BannerContainer>
  );
}

export default Banner;
