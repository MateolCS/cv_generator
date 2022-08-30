import React from "react";

const EducationInfo = () => {
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
        placeholder="School name"
      />
      <input className="cv__form__input" type="text" placeholder="Degree" />
    </div>
  );
};

export default EducationInfo;
