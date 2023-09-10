import React, { useState } from "react";
import Logo from "../../assets/icon.jpg";
import css from "./Header.module.css";
import close from "../../assets/close.png";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import hamburger from '../../assets/hamburger.svg'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginMenu, setshowLoginMenu] = useState(false);

  const toggleBars = () => {
    setShowMenu((showMenu) => !showMenu);
  };
  return (
    <div className={css.container} >
      <div className={css.logo}>
        
        <Link to="/"><img src={Logo} alt="home" style={{borderRadius:'50px',height:'2.8rem',width:'2.8rem'}}/></Link>
        <span>Polytechnic</span>
      </div>

      <div className={css.right}>
        <div className={css.bars} onClick={toggleBars}>
          {/* < MenuIcon/> */}
          <img src={hamburger} alt='hamburger-menu' className={css.ham}/>
        </div>

        <ul className={css.menu} style={{ display: showMenu ? "inherit" : "" }}>
          <li><Link to="/news"> News</Link></li>
          <li><Link to="/roadmap">Roadmap </Link></li>
          <li><Link to="/about-us">About us </Link></li>
          <li><Link to="/students">Our Students</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li
            
          >
          </li>
        </ul>
            <a href="#" className={css.Login} onClick={() => {
              setshowLoginMenu((showLoginMenu) => !showLoginMenu);
            }}>
              Login
            </a>

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
            <a href="/login" className={css.loginBtn} onClick={toggleBars}>
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
