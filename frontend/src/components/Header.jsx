import React from "react";
import logo from "./assets/Group 1.png";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Header;
