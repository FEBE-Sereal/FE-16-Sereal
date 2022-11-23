import React from "react";
import { Link } from "react-router-dom";
import LogoSereal from "../../assets/img/logo_sereal.png";
import "./Navbar.css";
import "../../assets/css/style.css";

function Navbar() {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-md bg-light text-center">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={LogoSereal} alt="logo" height="50" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-0 mb-md-0 gap-md-5">
                <li className="nav-item">
                  <Link className="nav-link fancy-link" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fancy-link" to="/explore">
                    Class
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link fancy-link" to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fancy-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <div id="check-profile">
                {/* from API */}
                <ul className="navbar-nav gap-1 gap-md-4 mx">
                  <li className="nav-item">
                    <a className="nav-link reg fancy-link" href="./register">
                      Register
                    </a>
                  </li>
                  <a href="./login">
                    <button className="btn btn-main-color">Login</button>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
