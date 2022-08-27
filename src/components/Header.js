import React from "react";
import { FaRegListAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <FaRegListAlt className="header__title__icon" />
        Create Your CV an easy way
      </h1>
    </header>
  );
};

export default Header;
