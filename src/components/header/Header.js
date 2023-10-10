import React, { useState, useEffect, useLocation } from "react";
import Logo from "../../assets/icon.jpg";
import "./Header.css";
import close from "../../assets/close.png";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";
import ReCAPTCHA from "react-google-recaptcha";
import hamMenu from "../../assets/ham1.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
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

  const openLogin = () => {
    setIsLoginOpen(true);
    // Add the body class to disable scrolling
    document.body.classList.add("body-no-scroll");
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
    // Remove the body class to re-enable scrolling
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

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  return (
    <div className={isSticky ? "navbarContainer active" : "navbarContainer"}>
      <Link to="/">
        <div className="logo">
          <img
            src={Logo}
            alt="home"
            style={{ borderRadius: "50px", height: "2.8rem", width: "2.8rem" }}
          />
          <span>Polytechnic</span>
        </div>
      </Link>

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
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/roadmap">Roadmap</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

          <Link to="/">
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
          </Link>
        </ul>
        <a
          href="#"
          className="Login"
          onClick={() => {
            setShowLoginMenu((showLoginMenu) => !showLoginMenu);
            openLogin();
          }}
        >
          Login
        </a>

        {isLoginOpen && (
          <div
            className="loginCover"
            style={{ visibility: showLoginMenu ? "visible" : "hidden" }}
          >
            <img
              src={close}
              className="close"
              onClick={() => {
                setShowLoginMenu((showLoginMenu) => !showLoginMenu);
                closeLogin();
              }}
              alt="close"
            />
            <h1>Login</h1>
            <div className="loginContainer">
              <input type="email" placeholder="Enter your email" />
              <input type="username" placeholder="Enter your username" />
              <ReCAPTCHA
                sitekey="Your client site key"
                onChange={onChange}
                className="captcha"
              />
              <a href="/login" className="loginBtn" onClick={toggleBars}>
                Login
              </a>
            </div>
          </div>
        )}
        <div
          className="bars"
          onClick={(toggleBars, openMenu)}
          style={{ display: showMenu ? "none" : "block" }}
        >
          <img
            src={hamMenu}
            className="ham"
            alt="Hamburger"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
