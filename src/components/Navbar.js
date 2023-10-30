import React from "react";
import "../styles/main.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/profile">Profile</a>
      <a href="/contact">Contact</a>
    </div>
  );
}

export default Navbar;
