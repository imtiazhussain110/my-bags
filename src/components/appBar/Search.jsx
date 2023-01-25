import { IconButton, Slide } from "@mui/material";
import React from "react";
import { useAppContext } from "../../context";
import { SearchBoxContainer, SearchField } from "../../style/searchBox";
import SearchIcon from "@mui/icons-material/Search";
import ClosedIcon from "@mui/icons-material/Close";

function Search() {
  const { showSearchBox, setShowSearchBox } = useAppContext();
  return (
    <Slide direction="down" in={showSearchBox} timeout={500}>
      <SearchBoxContainer>
        <SearchField
          color="secondary"
          variant="standard"
          placeholder="Search"
          fullWidth
        />
        <IconButton>
          <SearchIcon
            color="secondary"
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          />
        </IconButton>
        <IconButton
          onClick={() => setShowSearchBox(false)}
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <ClosedIcon color="secondary" sx={{ fontSize: "4rem" }} />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  );
}

export default Search;
