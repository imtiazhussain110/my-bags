import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import { Route, Routes } from "react-router-dom";

import AppBar from "./components/appBar";
import { Container, CssBaseline } from "@mui/material";
import Banner from "./components/banner";
import Slider from "./components/slider";
import Products from "./components/products";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import { AppProvider } from "./context";
import Search from "./components/appBar/Search";
import ProductDetail from "./components/productDetail";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <AppBar />
        <Banner />
        <Slider />
        <Products />
        <Footer />
        <AppDrawer />
        <Search />
        <ProductDetail />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
