import React from "react";
import { Link } from "react-router-dom";
import LogoSereal from "../../assets/img/logo_sereal.png";
import pp from "../../assets/img/pp.jpg";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { FaUser, FaUserCircle } from "react-icons/fa";
import NavDropdown from "react-bootstrap/NavDropdown";
// import "./Navbar.css";
// import "../../App.css";
// import "../../assets/css/style.css";

const myComponentStyle = {
  color: "#FFFF",
  backgroundColor: "#fb9847",
  borderRadius: "0.25rem"
}

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
              {localStorage.getItem("token") ? (
                <>
                  <FaUserCircle style={{ fontSize: "2rem" }} />
                  <NavDropdown style={{}} menuVariant="light">
                    <NavDropdown.Item href="/dashboard">
                      <CgProfile /> Dashboard
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        localStorage.clear();
                        window.location.href = "/login";
                      }}
                    >
                      <IoMdLogOut /> Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <div id="check-profile">
                  <ul className="navbar-nav gap-1 gap-md-4 mx">
                    <li className="nav-item">
                      <a className="nav-link reg fancy-link" href="./register">
                        Register
                      </a>
                    </li>
                    <a href="./login">
                      <div style={myComponentStyle}>
                      <button className="btn-main-color btn">Login</button>
                      </div>
                    </a>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
