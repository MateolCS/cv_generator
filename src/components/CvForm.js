import React from "react";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import Button from "./Button";
const CvForm = () => {
  const [schoolInfo, setSchoolInfo] = useState(1);

  const addEducationInfo = (e) => {
    e.preventDefault();
    setSchoolInfo(schoolInfo + 1);
  };

  const removeEducationInfo = (e) => {
    e.preventDefault();
    setSchoolInfo(schoolInfo === 1 ? 1 : schoolInfo - 1);
    educationInfoComponents.pop();
  };

  const educationInfoComponents = [];
  for (let i = 0; i < schoolInfo; i++) {
    educationInfoComponents.push(<EducationInfo />);
  }

  return (
    <form className="cv__form">
      <PersonalInfo />
      <h4 className="input__group__title">Education</h4>
      {educationInfoComponents}
      <Button text={"Add"} bgColor={"#33415C"} clickEvent={addEducationInfo} />
      <Button
        text={"Remove"}
        bgColor={"#33415C"}
        clickEvent={removeEducationInfo}
      />
    </form>
  );
};

export default CvForm;
