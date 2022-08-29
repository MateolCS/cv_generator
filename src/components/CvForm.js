import React from "react";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
const CvForm = () => {
  return (
    <form className="cv__form">
      <PersonalInfo />
      <EducationInfo />
    </form>
  );
};

export default CvForm;
