// simple title logo on header/ bottom nav will serve as navbar
import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div className="logo">
        <h1>PokeRoll</h1>
      </div>
    </header>
  );
}

export default Header;
