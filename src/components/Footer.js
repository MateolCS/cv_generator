import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__content">
        Made by @MateoICS
        <a className="footer__content__link" href="https://github.com/MateolCS">
          <FaGithub />
        </a>
      </h3>
    </footer>
  );
};

export default Footer;
