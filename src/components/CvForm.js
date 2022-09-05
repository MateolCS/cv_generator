import React from "react";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import EducationInfo from "./EducationInfo";
import Button from "./Button";
import WorkExperience from "./WorkExperience";

const CvForm = ({
  educationInfo,
  workExperience,
  personalInfo,
  showCv,
  updateEducationInfo,
}) => {
  const [schoolInfo, setSchoolInfo] = useState(educationInfo.length);
  const [workInfo, setWorkInfo] = useState(workExperience.length);

  const showPreview = (e) => {
    e.preventDefault();
    showCv(true);
  };

  const hidePreview = (e) => {
    e.preventDefault();
    showCv(false);
  };

  const addEducationInfo = (e) => {
    e.preventDefault();
    setSchoolInfo(schoolInfo + 1);
  };

  const removeEducationInfo = (e) => {
    e.preventDefault();
    setSchoolInfo(schoolInfo === 1 ? 1 : schoolInfo - 1);
  };

  const addWorkInfo = (e) => {
    e.preventDefault();
    setWorkInfo(workInfo + 1);
  };

  const removeWorkInfo = (e) => {
    e.preventDefault();
    setWorkInfo(workInfo === 1 ? 1 : workInfo - 1);
  };

  const workInfoComponents = [];
  const educationInfoComponents = [];

  for (let i = 0; i < schoolInfo; i++) {
    educationInfoComponents.push(
      <EducationInfo
        key={i}
        cvEducationInfo={educationInfo[i] ? educationInfo[i] : null}
        updateExperience={updateEducationInfo}
      />
    );
  }

  for (let i = 0; i < workInfo; i++) {
    workInfoComponents.push(
      <WorkExperience
        key={i}
        cvWorkExperience={workExperience[i] ? workExperience[i] : null}
      />
    );
  }

  return (
    <form className="cv__form">
      <PersonalInfo cvPersonalInfo={personalInfo} />
      <h4 className="input__group__title">Education</h4>
      {educationInfoComponents}
      <Button text={"Add"} bgColor={"#33415C"} clickEvent={addEducationInfo} />
      <Button
        text={"Remove"}
        bgColor={"#33415C"}
        clickEvent={removeEducationInfo}
      />
      <h4 className="input__group__title">Work experience</h4>
      {workInfoComponents}
      <Button text={"Add"} bgColor={"#33415C"} clickEvent={addWorkInfo} />
      <Button text={"Remove"} bgColor={"#33415C"} clickEvent={removeWorkInfo} />
      <div className="form__utility__buttons">
        <Button
          text={"Submit form"}
          bgColor={"#0353A4"}
          clickEvent={showPreview}
        />
        <Button
          text={"✏️ Edit form"}
          bgColor={"#0353A4"}
          clickEvent={hidePreview}
        />
      </div>
    </form>
  );
};

export default CvForm;
