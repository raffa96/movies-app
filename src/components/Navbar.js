import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

function Navbar({ onSearchMovie }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        MyMovie
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <Menu />

        <SearchBar onSearchMovie={onSearchMovie} />
      </div>
    </nav>
  );
}

export default Navbar;
