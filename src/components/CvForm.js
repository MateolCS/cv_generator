import React from "react";
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
  updatePersonalInfo,
  onWorkAdd,
  onEducationAdd,
  onWorkRemove,
  onEducationRemove,
  disableInput,
  setDisableInput,
  updateWorkExperience,
}) => {
  const workInfoComponents = [];
  const educationInfoComponents = [];

  const showPreview = (e) => {
    e.preventDefault();
    showCv(true);
    setDisableInput(true);
  };

  const hidePreview = (e) => {
    e.preventDefault();
    showCv(false);
    setDisableInput(false);
  };

  for (let i = 0; i < educationInfo.length; i++) {
    educationInfoComponents.push(
      <EducationInfo
        key={i}
        educationInfo={educationInfo[i]}
        updateEducationInfo={updateEducationInfo}
        inputState={disableInput}
      />
    );
  }

  for (let i = 0; i < workExperience.length; i++) {
    workInfoComponents.push(
      <WorkExperience
        key={i}
        workExperience={workExperience[i]}
        inputState={disableInput}
        updateWorkExperience={updateWorkExperience}
      />
    );
  }

  return (
    <form className="cv__form">
      <PersonalInfo
        cvPersonalInfo={personalInfo}
        updatePersonalInfo={updatePersonalInfo}
        inputState={disableInput}
      />
      <h4 className="input__group__title">Education</h4>
      {educationInfoComponents}
      <Button text={"Add"} bgColor={"#33415C"} clickEvent={onEducationAdd} />
      <Button
        text={"Remove"}
        bgColor={"#33415C"}
        clickEvent={onEducationRemove}
      />
      <h4 className="input__group__title">Work experience</h4>
      {workInfoComponents}
      <Button text={"Add"} bgColor={"#33415C"} clickEvent={onWorkAdd} />
      <Button text={"Remove"} bgColor={"#33415C"} clickEvent={onWorkRemove} />
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
