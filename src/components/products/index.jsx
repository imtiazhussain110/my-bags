import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";

function Products() {
  const theme = useTheme();
  const mode = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      <Box display="flex" justifyContent="center" sx={{ py: 3 }}>
        <Typography variant="h4">Our Products</Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        sx={{ m: "20px 4px 10px 4px" }}
      >
        {products.map((product) => {
          return (
            <Grid
              item
              key={product.id}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              xs={12}
              sm={4}
              md={4}
            >
              {mode ? (
                <SingleProduct product={product} mode={mode} />
              ) : (
                <SingleProductDesktop product={product} mode={mode} />
              )}
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Products;
