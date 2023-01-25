import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Colors } from "../../theme";

function Footer() {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        my: 3,
        p: { xs: 4, md: 10 },
        py: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <Typography variant="body1" marginBottom="1rem">
            ABOUT US
          </Typography>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem
            omnis in voluptate eligendi voluptatem exercitationem quo pariatur
            tenetur quibusdam.
          </Typography>
          <Box sx={{ mt: 4, color: Colors.dove_gray }}>
            <FacebookIcon />
            <TwitterIcon sx={{ mx: 3 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <Typography variant="body1" marginBottom="1rem">
            INFORMATION
          </Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <Typography variant="body1" marginBottom="1rem">
            MY ACCOUNT
          </Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <Typography variant="body1" marginBottom="1rem">
            NEWSLETTER
          </Typography>
          <Stack>
            <TextField
              variant="standard"
              color="primary"
              label="Email Address"
              sx={{
                ".MuiInputLabel-root": {
                  color: Colors.white,
                },
                ".MuiInput-root:before": {
                  borderBottom: `1px solid ${Colors.secondary}`,
                },
                ".MuiInputBase-input": {
                  color: Colors.white,
                },
              }}
            />
            <Button sx={{ my: 4 }} variant="contained" startIcon={<SendIcon />}>
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
