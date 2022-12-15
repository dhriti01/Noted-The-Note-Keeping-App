import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import IconButton from '@mui/material/IconButton';

function SearchBar(props) {

    return (
        <div className="search-bar">
            <IconButton aria-label="delete"><SearchIcon /></IconButton>
            <input
                name="search"
                onChange={props.onSearch}
                value={props.value}
                placeholder="Search"
            />
            <IconButton aria-label="delete" onClick={props.onClear}><ClearRoundedIcon /></IconButton>
        </div>
    );
}

export default SearchBar;