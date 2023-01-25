import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useAppContext } from "../../context";
import { Colors } from "../../theme";
import CloseIcon from "@mui/icons-material/Close";

function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useAppContext();
  return (
    <>
      {drawerOpen && (
        <IconButton
          sx={{ zIndex: 1999, position: "absolute", top: 10, left: "250px" }}
          onClick={() => setDrawerOpen(false)}
        >
          <CloseIcon sx={{ color: Colors.white }} />
        </IconButton>
      )}
      <Drawer
        open={drawerOpen}
        sx={{
          ".MuiPaper-root": {
            width: 250,
            background: Colors.primary,
            color: Colors.secondary,
            borderRadius: "0 100px 0 0 ",
            borderRight: `1px solid ${Colors.secondary}`,
          },
        }}
      >
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <Divider
            variant="middle"
            sx={{ backgroundColor: Colors.secondary, opacity: 0.5 }}
          />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <Divider
            variant="middle"
            sx={{ backgroundColor: Colors.secondary, opacity: 0.5 }}
          />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <Divider
            variant="middle"
            sx={{ backgroundColor: Colors.secondary, opacity: 0.5 }}
          />
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <Divider
            variant="middle"
            sx={{ backgroundColor: Colors.secondary, opacity: 0.5 }}
          />
          <ListItemButton>
            <ListItemText>Contact</ListItemText>
          </ListItemButton>
          <Divider
            variant="middle"
            sx={{ backgroundColor: Colors.secondary, opacity: 0.5 }}
          />
        </List>
      </Drawer>
    </>
  );
}

export default AppDrawer;
