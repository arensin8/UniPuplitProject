import React, { useState } from "react";
import Logo from "../../assets/icon.jpg";
import css from "./Header.module.css";
import close from "../../assets/close.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginMenu, setshowLoginMenu] = useState(false);

  const toggleBars = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <div className={css.container}>
      <div className={css.logo}>
        
        <Link to="/"><img src={Logo} alt="home" style={{borderRadius:'50px',height:'2.8rem',width:'2.8rem'}}/></Link>
        <span>Polytechnic</span>
      </div>

      <div className={css.right}>
        <div className={css.bars} onClick={toggleBars}>
          <i class="fa-solid fa-bars"></i>
        </div>

        <ul className={css.menu} style={{ display: showMenu ? "inherit" : "" }}>
          <li>
            <Link to="/news"> News</Link>
          </li>
          <li><Link to="/roadmap">Roadmap </Link></li>
          <li><Link to="/about-us">About us </Link></li>
          <li><Link to="/getInTouch"> Get in touch</Link></li>
          <li
            onClick={() => {
              setshowLoginMenu((showLoginMenu) => !showLoginMenu);
            }}
          >
            <a href="#" className={css.Login}>
              Login
            </a>
          </li>
        </ul>

        <div
          className={css.loginCover}
          style={{ display: showLoginMenu ? "block" : "none" }}
        >
          <img
            src={close}
            className={css.close}
            onClick={() => {
              setshowLoginMenu((showLoginMenu) => !showLoginMenu);
            }}
          />
          <h1>Login</h1>
          <div className={css.loginContainer}>
            <input type="email" placeholder="enter your email" />
            <input type="username" placeholder="enter your username" />
            <a href="/login" className={css.loginBtn}>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
