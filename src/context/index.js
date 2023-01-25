import { createContext, useContext, useState } from "react";

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [productDetails, setProductDetails] = useState({});
  const value = {
    drawerOpen,
    setDrawerOpen,
    showSearchBox,
    setShowSearchBox,
    showDialog,
    setShowDialog,
    productDetails,
    setProductDetails,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
