import React from 'react';
import { Link } from 'gatsby'
const Nav = () => {
  return (
    <nav>
      <Link
        to="/about"
        id="nav-0"
        className="navLink"
      >
        About
      </Link>
      <Link
        to="/"
        className="navLink"
      >
        Home
      </Link>
      <Link
        to="/contact"
        className="navLink"
      >
        Contact
      </Link>
    </nav>
  )
};

export default Nav;