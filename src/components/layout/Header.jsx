import React from "react";
import Navbar from "./Navbar";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <header>
        <div className="container_inner">
          <Link to={'/'}>
          <img src={logo} alt="logo" className="logo" />
          </Link>
          <Navbar/>
        </div>
      </header>
    </>
  );
};

export default Header;
