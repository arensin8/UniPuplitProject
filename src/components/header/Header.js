import React, { useState, useEffect, useLocation } from "react";
import Logo from "../../assets/icon.jpg";
import "./Header.css";
import close from "../../assets/close.png";
import { NavLink } from "react-router-dom";
import "../../App.css";
// import ReCAPTCHA from "react-google-recaptcha";
import hamMenu from "../../assets/ham1.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    closeMenu();
  }, []);

  const openMenu = () => {
    setShowMenu(true);
    // Add the body class to disable scrolling
    document.body.classList.add("body-no-scroll");
  };

  const closeMenu = () => {
    setShowMenu(false);
    // Add the body class to disable scrolling
    document.body.classList.remove("body-no-scroll");
  };

  const toggleBars = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  const stickyNavbar = () => {
    if (window.scrollY > 20) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener("scroll", stickyNavbar);

  return (
    <div className={isSticky ? "navbarContainer active" : "navbarContainer"}>
      <NavLink to="/">
        <div className="logo">
          <img
            src={Logo}
            alt="home"
            style={{ borderRadius: "50px", height: "2.8rem", width: "2.8rem" }}
          />
          <span>Polytechnic</span>
        </div>
      </NavLink>

      <div className="right">
        <ul
          className={`menu ${showMenu ? "active" : ""}`}
          style={{ display: showMenu ? "inherit" : "" }}
        >
          <img
            src={close}
            className="close2"
            style={{ display: showMenu ? "block" : "none" }}
            onClick={(toggleBars, closeMenu)}
            alt="close"
          />
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/roadmap">Roadmap</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>

          <NavLink to="/">
            <div className="logo2">
              <img
                src={Logo}
                alt="home"
                style={{
                  borderRadius: "50px",
                  height: "2.8rem",
                  width: "2.8rem",
                }}
              />
              <span>Polytechnic</span>
            </div>
          </NavLink>
        </ul>
        <NavLink to="/login">
          <a type="button" className="Login">
            Login
          </a>
        </NavLink>

        <div
          className="bars"
          onClick={(toggleBars, openMenu)}
          style={{ display: showMenu ? "none" : "block" }}
        >
          <img src={hamMenu} className="ham" alt="Hamburger" />
        </div>
      </div>
    </div>
  );
};

export default Header;
