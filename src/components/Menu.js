import React from "react";

function Menu() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">
          Home
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#!"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Categories
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/movie">
            Movie
          </a>
          <a className="dropdown-item" href="/series">
            Series
          </a>
        </div>
      </li>
    </ul>
  );
}

export default Menu;
