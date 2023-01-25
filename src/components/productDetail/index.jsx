import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import React from "react";
import { useAppContext } from "../../context";
import {
  ProductDetailInfo,
  ProductDetailWrapper,
} from "../../style/productDetail";
import { ProductImage, ProductWrapper } from "../../style/products";
import { Colors } from "../../theme";

const SlideTransition = React.forwardRef(function SlideTransition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function ProductDetail() {
  const { showDialog, setShowDialog, productDetails } = useAppContext();
  return (
    <Dialog
      TransitionComponent={SlideTransition}
      variant="permanent"
      open={showDialog}
      fullScreen
    >
      <DialogTitle
        sx={{
          background: Colors.secondary,
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography sx={{ fontFamily: `Montez, cursive`, fontSize: "2rem" }}>
            My Bags
          </Typography>
          <IconButton onClick={() => setShowDialog(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <ProductWrapper sx={{ mr: 4 }}>
            <ProductImage src={productDetails.image} />
          </ProductWrapper>
          <ProductWrapper>
            <ProductDetailInfo>
              <Typography variant="h4" lineHeight={1} mb={2}>
                {productDetails.name}
              </Typography>
              <Typography variant="subtitle1">SKU 777</Typography>
              <Typography variant="subtitle1">
                Avalability: 7 in stock
              </Typography>
              <Divider light sx={{ my: 2, maxWidth: { sm: "15rem" } }} />
              <Typography variant="body">
                {productDetails.description}
                {productDetails.description}
                {productDetails.description}
                {productDetails.description}
              </Typography>
              <Button variant="contained" sx={{ width: "150px", marginTop: 3 }}>
                Add To Cart
              </Button>
            </ProductDetailInfo>
          </ProductWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetail;
