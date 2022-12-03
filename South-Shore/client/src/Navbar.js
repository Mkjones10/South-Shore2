import React from "react";
import { Link } from "react-router-dom";
import './styles/Navbar.css'

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-head"> South Shore Awareness</div>
      
      <div className="nav-links">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/needs'>Needs</Link>
      
      </div>
    </div>
  );
}
