import React from "react";

const WorkExperience = ({
  workExperience,
  inputState,
  updateWorkExperience,
}) => {
  return (
    <div className="input__group" id={workExperience.id}>
      <input
        className="cv__form__input"
        type="text"
        onFocus={(e) => {
          e.target.type = "date";
        }}
        placeholder="From"
        value={workExperience.from}
        name="from"
        onChange={(e) => {
          updateWorkExperience(e);
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
        value={workExperience.to}
        name="to"
        onChange={(e) => {
          updateWorkExperience(e);
        }}
        disabled={inputState}
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Company name"
        value={workExperience.companyName}
        name="companyName"
        onChange={(e) => {
          updateWorkExperience(e);
        }}
        disabled={inputState}
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Position"
        value={workExperience.position}
        name="position"
        onChange={(e) => {
          updateWorkExperience(e);
        }}
        disabled={inputState}
      />
    </div>
  );
};

export default WorkExperience;
