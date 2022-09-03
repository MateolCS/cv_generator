import React from "react";

const CV = ({ cv }) => {
  const workExperience = [];
  const educationInfo = [];

  for (let i = 0; i < cv.workExperience.length; i++) {
    workExperience.push(
      <div key={i} className="cv__section">
        <h4 className="cv__section__title">
          {cv.workExperience[i].companyName}
        </h4>
        <p>
          {cv.workExperience[i].from} - {cv.workExperience[i].to}
        </p>
        <p>Position: {cv.workExperience[i].position}</p>
      </div>
    );
  }

  for (let i = 0; i < cv.educationInfo.length; i++) {
    educationInfo.push(
      <div key={i} className="cv__section">
        <h4 className="cv__section__title">{cv.educationInfo[i].schoolName}</h4>
        <p>
          {cv.educationInfo[i].from} - {cv.educationInfo[i].to}
        </p>
        <p>Degree: {cv.educationInfo[i].degree}</p>
      </div>
    );
  }

  return (
    <div className="cv">
      <div className="cv__header"></div>
      <div className="cv__main">
        <div className="cv__content__container">
          {workExperience}
          {educationInfo}
        </div>
        <div className="cv__side__content"></div>
      </div>
    </div>
  );
};

export default CV;
