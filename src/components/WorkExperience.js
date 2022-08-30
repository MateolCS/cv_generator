import React from "react";

const WorkExperience = () => {
  return (
    <div className="input__group">
      <input
        className="cv__form__input"
        type="text"
        onFocus={(e) => {
          e.target.type = "date";
        }}
        placeholder="From"
      />
      <input
        className="cv__form__input"
        type="text"
        onFocus={(e) => {
          e.target.type = "date";
        }}
        placeholder="To"
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Company name"
      />
      <input className="cv__form__input" type="text" placeholder="Position" />
    </div>
  );
};

export default WorkExperience;
