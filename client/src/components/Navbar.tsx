import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../style.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <Link to="/?cat=art" className="link">
            <h6>ART</h6>
          </Link>
          <Link to="/?cat=science" className="link">
            <h6>SCIENCE</h6>
          </Link>
          <Link to="/?cat=technology" className="link">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link to="/?cat=cinema" className="link">
            <h6>CINEMA</h6>
          </Link>
          <Link to="/?cat=desing" className="link">
            <h6>DESING</h6>
          </Link>
          <Link to="/?cat=food" className="link">
            <h6>FOOD</h6>
          </Link>
          <span>Carlos</span>
          <span>Logout</span>
          <span className="write">
            <Link to="/write" className="link">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
