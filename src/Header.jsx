import React from "react";
import SearchBar from "./SearchBar";
//import HighlightIcon from "@material-ui/icons/Highlight";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header(props) {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
      <SearchBar onSearch={props.onSearch} onClear={props.onClear} value={props.value} />
    </header>
  );
}

export default Header;
