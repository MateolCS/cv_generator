import React from "react";

const PersonalInfo = () => {
  return (
    <div className="personal__info">
      <input
        className="cv__form__input"
        type="text"
        placeholder="Enter your name"
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Enter your surname"
      />
      <input
        className="cv__form__input"
        type="text"
        onFocus={(e) => {
          e.target.type = "date";
        }}
        placeholder="Enter your birth date"
      />
      <input
        className="cv__form__input"
        type="tel"
        placeholder="Enter your phone number"
      />
      <input
        className="cv__form__input"
        type="email"
        placeholder="Enter your email"
      />
    </div>
  );
};

export default PersonalInfo;
