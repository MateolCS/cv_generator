import React from "react";

const PersonalInfo = () => {
  return (
    <div>
      <input type="text" placeholder="Enter your name" />
      <input type="text" placeholder="Enter your surname" />
      <input type="date" placeholder="Enter your birth date" />
      <input type="tel" placeholder="Enter your phone number" />
      <input type="email" placeholder="Enter your email" />
    </div>
  );
};

export default PersonalInfo;
