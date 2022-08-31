import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CvForm from "./components/CvForm";

function App() {
  const [cv, setCv] = useState({
    personalInfo: {
      name: "",
      surname: "",
      birthDate: "",
      phoneNumber: "",
      email: "",
      address: "",
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
