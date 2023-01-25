import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Stack, Typography } from "@mui/material";
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
import { useAppContext } from "../../context";

function SingleProduct({ product, mode }) {
  const { setShowDialog, setProductDetails } = useAppContext();
  return (
    <>
      <ProductWrapper>
        <ProductImage src={product.image} />
        <ProductMetaWrapper>
          <Typography variant={mode ? "h6" : "h5"} lineHeight={2}>
            {product.name}
          </Typography>
          <Typography variant={mode ? "caption" : "body"}>
            ${product.price}
          </Typography>
        </ProductMetaWrapper>
        <ProductActionWrapper>
          <Stack direction="row">
            <ProductFavButton isFav={false}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton
              onClick={() => {
                setProductDetails(product);
                setShowDialog(true);
              }}
            >
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
        <ProductAddToCart variant="contained">Add To Cart</ProductAddToCart>
      </ProductWrapper>
    </>
  );
}

export default SingleProduct;
