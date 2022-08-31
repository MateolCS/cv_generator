import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CvForm from "./components/CvForm";

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
        from: "",
        to: "",
        schoolName: "",
        degree: "",
      },
    ],
    workExperience: [
      {
        from: "",
        to: "",
        companyName: "",
        position: "",
      },
    ],
  });

  return (
    <>
      <Header />
      <div className="container">
        <CvForm cv={cv} modifyCv={setCv} />
      </div>
      <Footer />
    </>
  );
}

export default App;
