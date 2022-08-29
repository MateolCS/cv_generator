import React from "react";

const PersonalInfo = () => {
  return (
    <div className="input__group">
      <h4 className="input__group__title">Personal information</h4>
      <input className="cv__form__input" type="text" placeholder="Name" />
      <input className="cv__form__input" type="text" placeholder="Surname" />
      <input
        className="cv__form__input"
        type="text"
        onFocus={(e) => {
          e.target.type = "date";
        }}
        placeholder="Birth date"
      />
      <input
        className="cv__form__input"
        type="tel"
        placeholder="Phone number"
      />
      <input className="cv__form__input" type="email" placeholder="Email" />
      <input className="cv__form__input" type="text" placeholder="Address" />
    </div>
  );
};

export default PersonalInfo;
