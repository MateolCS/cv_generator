import React from "react";

const EducationInfo = ({ cvEducationInfo, updateExperience, inputState }) => {
  return (
    <div className="input__group">
      <input
        className="cv__form__input"
        type="text"
        onFocus={(e) => {
          e.target.type = "date";
        }}
        placeholder="From"
        value={cvEducationInfo ? cvEducationInfo.from : ""}
        name="from"
        onChange={(e) => {
          updateExperience(e);
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
        value={cvEducationInfo ? cvEducationInfo.to : ""}
        name="to"
        onChange={(e) => {
          updateExperience(e);
        }}
        disabled={inputState}
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="School name"
        value={cvEducationInfo ? cvEducationInfo.schoolName : ""}
        name="schoolName"
        onChange={(e) => {
          updateExperience(e);
        }}
        disabled={inputState}
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Degree"
        value={cvEducationInfo ? cvEducationInfo.degree : ""}
        onChange={(e) => {
          updateExperience(e);
        }}
        disabled={inputState}
      />
    </div>
  );
};

export default EducationInfo;
