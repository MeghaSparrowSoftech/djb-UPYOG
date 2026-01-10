// import { SearchIcon } from "@mcd89/finance-ui-react-components";
import React from "react";

const SearchBar = () => {
  return (
    <div className="mcd-search-wrapper">
      <div className="mcd-search-box">
        {/* <span className="mcd-search-icon"><SearchIcon/> </span> */}

        <input
          type="text"
          placeholder="Find a service"
          className="mcd-search-input"
        />

        <button className="mcd-search-btn">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
