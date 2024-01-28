import React from "react";
import { Link } from "react-router-dom";
import css from "./Footer.module.css";
import Logo from "../../assets/icon.jpg";
import InfoBlock from "./InfoBlock";
import { contactData, aboutData, companyData } from "../../data/footer";
const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>Polytechnic</span>
        </div>

        <InfoBlock {...contactData} />
        <InfoBlock {...aboutData} />
        <InfoBlock {...companyData} />
      </div>

      <div className={css.copyright}>
        <span>copyright &copy; 2023 by polytechnic</span>
        <span>All rights resserved</span>
      </div>
    </div>
  );
};

export default Footer;
