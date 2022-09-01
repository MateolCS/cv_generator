import React from "react";
import { useState } from "react";

const WorkExperience = ({ cvWorkExperience }) => {
  const [beginnig, setBeginnig] = useState(
    cvWorkExperience.from !== "" ? cvWorkExperience.from : ""
  );
  const [end, setEnd] = useState(
    cvWorkExperience.to !== "" ? cvWorkExperience.to : ""
  );
  const [companyName, setCompanyName] = useState(
    cvWorkExperience.companyName !== "" ? cvWorkExperience.companyName : ""
  );

  const [position, setPosition] = useState(
    cvWorkExperience.position !== "" ? cvWorkExperience.position : ""
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
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Company name"
        value={companyName}
        onChange={(e) => {
          setCompanyName(e.target.value);
        }}
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => {
          setPosition(e.target.value);
        }}
      />
    </div>
  );
};

export default WorkExperience;
