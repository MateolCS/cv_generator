import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CvForm from "./components/CvForm";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <CvForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
