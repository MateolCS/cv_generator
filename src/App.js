import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CvForm from "./components/CvForm";
import CV from "./components/cvDisplay/CV";

function App() {
  const [showCvPreview, setShowCvPreview] = useState(false);
  const [disableInput, setDisableInput] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: "Mateusz",
    surname: "Namysł",
    birthDate: "16.08.2022",
    phoneNumber: "790300077",
    email: "mateusz.namysl0318@gmail.com",
    address: "Szczytniki ul.Boczna 8",
  });

  const [workExperience, setWorkExperience] = useState([
    {
      id: 1,
      from: "10.10.2010",
      to: "10.10.2013",
      companyName: "Appunite",
      position: "mid",
    },
  ]);
  const [educationInfo, setEducationInfo] = useState([
    {
      id: 1,
      from: "10.10.2022",
      to: "11.11.2023",
      schoolName: "ZSK",
      degree: "Technik",
    },
  ]);

  const addEducation = (e) => {
    e.preventDefault();
    setEducationInfo([
      ...educationInfo,
      {
        id: educationInfo.length + 1,
        from: "",
        to: "",
        schoolName: "",
        degree: "",
      },
    ]);
  };

  const addWork = (e) => {
    e.preventDefault();
    setWorkExperience([
      ...workExperience,
      {
        id: workExperience.length + 1,
        from: "",
        to: "",
        companyName: "",
        position: "",
      },
    ]);
  };

  const removeEducation = (e) => {
    e.preventDefault();
    setEducationInfo(educationInfo.slice(0, educationInfo.length - 1));
  };

  const removeWork = (e) => {
    e.preventDefault();
    setWorkExperience(workExperience.slice(0, workExperience.length - 1));
  };

  const updatePersonalInfo = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const updateEducationInfo = (e) => {};

  return (
    <>
      <Header />
      <div className="container">
        <CvForm
          personalInfo={personalInfo}
          updatePersonalInfo={updatePersonalInfo}
          educationInfo={educationInfo}
          workExperience={workExperience}
          showCv={setShowCvPreview}
          onWorkAdd={addWork}
          onEducationAdd={addEducation}
          onWorkRemove={removeWork}
          onEducationRemove={removeEducation}
          disableInput={disableInput}
          setDisableInput={setDisableInput}
        />
        {showCvPreview && (
          <CV cv={{ personalInfo, educationInfo, workExperience }} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
