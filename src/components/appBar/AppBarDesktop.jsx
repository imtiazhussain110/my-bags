import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import {
  AppBarContainer,
  AppBarHeader,
  AppBarMenuList,
} from "../../style/appBar";
import Actions from "./Actions";
import { useAppContext } from "../../context";

function AppBarDesktop({ mode }) {
  const { setShowSearchBox } = useAppContext();
  return (
    <Box>
      <AppBarContainer>
        <AppBarHeader>My Bags</AppBarHeader>
        <AppBarMenuList type="row">
          <ListItemText
            sx={{
              ":hover": { cursor: "pointer" },
            }}
            primary="Home"
          ></ListItemText>
          <ListItemText
            primary="Category"
            sx={{
              ":hover": { cursor: "pointer" },
            }}
          />
          <ListItemText
            sx={{
              ":hover": { cursor: "pointer" },
            }}
            primary="Products"
          />
          <ListItemText
            sx={{
              ":hover": { cursor: "pointer" },
            }}
            primary="Contact Us"
          />
          <ListItemButton sx={{ maxWidth: "fit-content" }}>
            <ListItemIcon onClick={() => setShowSearchBox(true)}>
              <SearchIcon />
            </ListItemIcon>
          </ListItemButton>
        </AppBarMenuList>
        <Actions mode={mode} />
      </AppBarContainer>
    </Box>
  );
}

export default AppBarDesktop;
