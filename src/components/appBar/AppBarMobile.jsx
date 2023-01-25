import { IconButton } from "@mui/material";
import React from "react";
import { AppBarContainer, AppBarHeader } from "../../style/appBar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { useAppContext } from "../../context";

function AppBarMobile({ mode }) {
  const { setShowSearchBox, setDrawerOpen } = useAppContext();

  return (
    <AppBarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppBarHeader variant="h4" textAlign="center">
        My Bags
      </AppBarHeader>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <SearchIcon />
      </IconButton>
      <Actions mode={mode} />
    </AppBarContainer>
  );
}

export default AppBarMobile;
