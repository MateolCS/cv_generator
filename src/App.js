import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CvForm from "./components/CvForm";
import CV from "./components/cvDisplay/CV";

function App() {
  const [cv, setCv] = useState({
    personalInfo: {
      name: "Mateusz",
      surname: "Namysł",
      birthDate: "16.08.2022",
      phoneNumber: "790300077",
      email: "mateusz.namysl0318@gmail.com",
      address: "Szczytniki ul.Boczna 8",
    },
    educationInfo: [
      {
        from: "10.10.2022",
        to: "11.11.2023",
        schoolName: "ZSK",
        degree: "Technik",
      },
    ],
    workExperience: [
      {
        from: "10.10.2010",
        to: "10.10.2013",
        companyName: "Appunite",
        position: "mid",
      },
    ],
  });

  return (
    <>
      <Header />
      <div className="container">
        <CvForm cv={cv} modifyCv={setCv} />
        <CV cv={cv} />
      </div>
      <Footer />
    </>
  );
}

export default App;
