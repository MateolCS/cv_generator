import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CvForm from "./components/CvForm";
import CV from "./components/cvDisplay/CV";

function App() {
  const [showCvPreview, setShowCvPreview] = useState(false);
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

  return (
    <>
      <Header />
      <div className="container">
        <CvForm
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          workExperience={workExperience}
          showCv={setShowCvPreview}
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
