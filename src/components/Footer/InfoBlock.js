// InfoBlock.js
import React from "react";
import { Link } from "react-router-dom";
import css from "./Footer.module.css"; // Import your CSS module

const InfoBlock = ({ title, lines }) => (
  <div className={css.block}>
    <div className={css.details}>
      <span>{title}</span>
      {lines.map((line, index) => (
        <span key={index} className={css.iconLine}>
          <i className={line.iconClass}></i>
          {line.link ? (
            <Link to={line.link}>
              <span>{line.text}</span>
            </Link>
          ) : (
            <span>{line.text}</span>
          )}
        </span>
      ))}
    </div>
  </div>
);

export default InfoBlock;
