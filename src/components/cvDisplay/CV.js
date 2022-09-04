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
        <div className="cv__section__content">
          <div className="cv__section__dates">
            <p>From: {cv.workExperience[i].from}</p>
            <p>To: {cv.workExperience[i].to}</p>
          </div>
          <p className="cv__middle">
            Position: {cv.workExperience[i].position}
          </p>
        </div>
      </div>
    );
  }

  for (let i = 0; i < cv.educationInfo.length; i++) {
    educationInfo.push(
      <div key={i} className="cv__section">
        <h4 className="cv__section__title">{cv.educationInfo[i].schoolName}</h4>
        <div className="cv__section__content">
          <div className="cv__section__dates">
            <p>From: {cv.educationInfo[i].from}</p>
            <p>To: {cv.educationInfo[i].to}</p>
          </div>
          <p className="cv__middle">Degree: {cv.educationInfo[i].degree}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cv">
      <div className="cv__header"></div>
      <div className="cv__main">
        <div className="cv__content__container">
          <div className="cv__element border__bottom">
            <h3 className="cv__element__title">Work Experience</h3>
            {workExperience}
          </div>
          <div className="cv__element">
            <h3 className="cv__element__title">Education</h3>
            {educationInfo}
          </div>
        </div>
        <div className="cv__side__content">
          <div className="cv__side__content__container">
            <p className="cv__side__content__item">
              {cv.personalInfo.name} {cv.personalInfo.surname}
            </p>
            <p className="cv__side__content__item">
              {cv.personalInfo.birthDate}
            </p>
            <p className="cv__side__content__item">
              Phone number: {cv.personalInfo.phoneNumber}
            </p>
            <p className="cv__side__content__item">
              Email: {cv.personalInfo.email}
            </p>
            <p className="cv__side__content__item">
              Address: {cv.personalInfo.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
