import React from "react";
import { useState } from "react";

const WorkExperience = ({ cvWorkExperience, inputState }) => {
  const [beginnig, setBeginnig] = useState(
    cvWorkExperience !== null ? cvWorkExperience.from : ""
  );
  const [end, setEnd] = useState(
    cvWorkExperience !== null ? cvWorkExperience.to : ""
  );
  const [companyName, setCompanyName] = useState(
    cvWorkExperience !== null ? cvWorkExperience.companyName : ""
  );

  const [position, setPosition] = useState(
    cvWorkExperience !== null ? cvWorkExperience.position : ""
  );

  return (
    <div className="input__group">
      <input
        className="cv__form__input"
        type="text"
        onFocus={(e) => {
          e.target.type = "date";
        }}
        placeholder="From"
        value={beginnig}
        onChange={(e) => {
          setBeginnig(e.target.value);
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
        value={end}
        onChange={(e) => {
          setEnd(e.target.value);
        }}
        disabled={inputState}
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Company name"
        value={companyName}
        onChange={(e) => {
          setCompanyName(e.target.value);
        }}
        disabled={inputState}
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => {
          setPosition(e.target.value);
        }}
        disabled={inputState}
      />
    </div>
  );
};

export default WorkExperience;
