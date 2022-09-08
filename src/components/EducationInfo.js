import React from "react";

const EducationInfo = ({ educationInfo, updateEducationInfo, inputState }) => {
  return (
    <div className="input__group" id={educationInfo.id}>
      <input
        className="cv__form__input"
        type="text"
        onFocus={(e) => {
          e.target.type = "date";
        }}
        placeholder="From"
        value={educationInfo.from}
        name="from"
        onChange={(e) => {
          updateEducationInfo(e);
        }}
        disabled={inputState}
      />
      <input
        className="cv__form__input"
        type="text"
        onFocus={(e) => {
          e.target.type = "date";
        }}
        placeholder="To"
        value={educationInfo.to}
        name="to"
        onChange={(e) => {
          updateEducationInfo(e);
        }}
        disabled={inputState}
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="School name"
        value={educationInfo.schoolName}
        name="schoolName"
        onChange={(e) => {
          updateEducationInfo(e);
        }}
        disabled={inputState}
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Degree"
        value={educationInfo.degree}
        name="degree"
        onChange={(e) => {
          updateEducationInfo(e);
        }}
        disabled={inputState}
      />
    </div>
  );
};

export default EducationInfo;
