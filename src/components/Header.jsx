import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <nav style={{ display: "flex", gap: "10px" }}>
        <NavLink to="/about" style={{color:"black",textDecoration:"none"}}>About</NavLink>
        <NavLink to="/work-examples" style={{color:"black",textDecoration:"none"}}>Work Examples</NavLink>
        <NavLink to="/contact-information" style={{color:"black",textDecoration:"none"}}>Contact Info</NavLink>
      </nav>
    </>
  );
}
