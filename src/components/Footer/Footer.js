import React from "react";
import { Link } from "react-router-dom";
import css from "./Footer.module.css";
import Logo from "../../assets/icon.jpg";
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>Polytechnic</span>
        </div>

        <div className={css.block}>
          <div className={css.details}>
            <span>Contact Us</span>
            <span className={css.iconLine}>
              {/* <i class="fa-solid fa-phone"></i> */}
              <span>+374-94136745</span>
            </span>
            <span className={css.iconLine}>
              <i class="fa-solid fa-envelope"></i>
              <span>polytechnic@gmail.com</span>
            </span>
            <span className={css.iconLine}>
              <i class="fa-brands fa-facebook"></i>
              <span>polytechnic</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.details}>
            <span>About Us</span>
            <span className={css.iconLine}>
              <i class="fa-solid fa-location-dot"></i>
              <span>105 Teryan St, Yerevan</span>
            </span>
            <span className={css.iconLine}>
              <i class="fa-solid fa-address-card"></i>
              <span>Mer masin</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.details}>
            <span>Our company</span>
            <span className={css.iconLine}>
              <i class="fa-solid fa-newspaper"></i>
              <Link to="/news">
                <span>News</span>
              </Link>
            </span>
            <span className={css.iconLine}>
              <i class="fa-solid fa-road"></i>
              <Link to="/roadmap">
                <span>Roadmap</span>
              </Link>
            </span>
            <span className={css.iconLine}>
              <i class="fa-solid fa-address-card"></i>
              <Link to="/about-us">
                <span>About Us</span>
              </Link>
            </span>
            <span className={css.iconLine}>
              <i class="fa-solid fa-phone"></i>
              <Link to="/contact">
                <span>Get in touch</span>
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyright}>
        <span>copyright &copy; 2023 by polytechnic</span>
        <span>All rights resserved</span>
      </div>
    </div>
  );
};

export default Footer;
