import React from "react";

const Button = ({ text, clickEvent, bgColor }) => {
  return (
    <button
      className="form__button"
      style={{ backgroundColor: bgColor }}
      onClick={clickEvent}
    >
      {text}
    </button>
  );
};

export default Button;
