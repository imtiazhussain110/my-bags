import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import React from "react";
import { SliderContainer, SliderText } from "../../style/slider";

function Slider() {
  return (
    <SliderContainer>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Marquee speed={100} gradient={false}>
          <SliderText>20% off on your first order!</SliderText>
        </Marquee>
      </Box>
    </SliderContainer>
  );
}

export default Slider;
