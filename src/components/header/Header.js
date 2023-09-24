import React, { useState, useEffect } from "react";
import Logo from "../../assets/icon.jpg";
import "./Header.css";
import close from "../../assets/close.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import hamburger from "../../assets/hamburger.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import "../../App.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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
        <ul className="menu" style={{ display: showMenu ? "inherit" : "" }}>
          <img
            src={close}
            className="close2"
            onClick={() => {
              setShowMenu((showMenu) => !showMenu);
            }}
            style={{ display: showMenu ? "block" : "none" }}
            alt="close"
          />
          <li>
            <Link to="/news"> News</Link>
          </li>
          <li>
            <Link to="/roadmap">Roadmap </Link>
          </li>
          <li>
            <Link to="/about-us">About us </Link>
          </li>
          <li>
            <Link to="/students">Our Students</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li></li>
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
            style={{ display: showLoginMenu ? "block" : "none" }}
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
              <input type="email" placeholder="enter your email" />
              <input type="username" placeholder="enter your username" />
              <a href="/login" className="loginBtn" onClick={toggleBars}>
                Login
              </a>
            </div>
          </div>
        )}
        <div
          className="bars"
          onClick={toggleBars}
          style={{ display: showMenu ? "none" : "block" }}
        >
          <RxHamburgerMenu className="ham" />
        </div>
      </div>
    </div>
  );
};

export default Header;
