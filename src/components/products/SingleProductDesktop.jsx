import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
import {
  ProductWrapper,
  ProductImage,
  ProductMetaWrapper,
  ProductActionWrapper,
  ProductFavButton,
  ProductActionButton,
  ProductAddToCart,
} from "../../style/products";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useState } from "react";
import { useAppContext } from "../../context";

function SingleProductDesktop({ product, mode }) {
  const [show, setShow] = useState(false);
  const { setShowDialog, setProductDetails } = useAppContext();

  const handleMouseEnter = () => {
    setShow(true);
  };
  const handleMouseLeave = () => {
    setShow(false);
  };
  return (
    <>
      <ProductWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ProductImage src={product.image} />
        <ProductFavButton isFav={false}>
          <FavoriteIcon />
        </ProductFavButton>
        {show && (
          <ProductAddToCart show={show} variant="contained">
            Add To Cart
          </ProductAddToCart>
        )}
        <ProductActionWrapper show={show}>
          <Stack direction="column">
            <Tooltip title="Share" placement="left">
              <ProductActionButton>
                <ShareIcon color="primary" />
              </ProductActionButton>
            </Tooltip>
            <Tooltip title="Full Screen" placement="left">
              <ProductActionButton
                onClick={() => {
                  setProductDetails(product);
                  setShowDialog(true);
                }}
              >
                <FitScreenIcon color="primary" />
              </ProductActionButton>
            </Tooltip>
          </Stack>
        </ProductActionWrapper>
      </ProductWrapper>
      <ProductMetaWrapper>
        <Typography variant={mode ? "h6" : "h5"} lineHeight={2}>
          {product.name}
        </Typography>
        <Typography variant={mode ? "caption" : "body"}>
          ${product.price}
        </Typography>
      </ProductMetaWrapper>
    </>
  );
}

export default SingleProductDesktop;
