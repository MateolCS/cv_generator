import React from "react";
import { useState } from "react";

const EducationInfo = ({ cvEducationInfo }) => {
  const [beginnig, setBeginnig] = useState(
    cvEducationInfo.from !== "" ? cvEducationInfo.from : ""
  );
  const [end, setEnd] = useState(
    cvEducationInfo.to !== "" ? cvEducationInfo.to : ""
  );
  const [schoolName, setSchoolName] = useState(
    cvEducationInfo.schoolName !== "" ? cvEducationInfo.schoolName : ""
  );

  const [degree, setDegree] = useState(
    cvEducationInfo.degree !== "" ? cvEducationInfo.degree : ""
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
        placeholder="School name"
        value={schoolName}
        onChange={(e) => {
          setSchoolName(e.target.value);
        }}
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Degree"
        value={degree}
        onChange={(e) => {
          setDegree(e.target.value);
        }}
      />
    </div>
  );
};

export default EducationInfo;
