import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import React from "react";
import {
  ActionsIconContainerDesktop,
  ActionsIconContainerMobile,
  AppBarMenuList,
} from "../../style/appBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { Colors } from "../../theme";

function Actions({ mode }) {
  const Component = mode
    ? ActionsIconContainerMobile
    : ActionsIconContainerDesktop;
  return (
    <Component>
      <AppBarMenuList type="row">
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: mode && Colors.secondary,
            }}
          >
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: mode && Colors.secondary,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: mode && Colors.secondary,
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </AppBarMenuList>
    </Component>
  );
}

export default Actions;
