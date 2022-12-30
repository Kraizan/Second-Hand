import React from "react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="px-3 py-2 bg-yellow">
      <div className="navbar justify-content-between">
        <a href="/" className="navbar-brand fs-2">
          Second Hand
        </a>
        <div className="w-50 d-none d-md-block">
          <SearchBar />
        </div>
        <div className="d-flex">
          <div className="">
            <button className="btn btn-primary">Sign In</button>
          </div>
        </div>
      </div>
      <div className="w-100 d-block d-md-none">
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
