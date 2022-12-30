import React from "react";
import NavIcon from "./NavIcon";

function SearchBar() {
  return (
    <div>
      <form className="form-inline">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              <NavIcon url="images/search-icon.png" alt="search" />
            </span>
          </div>
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
