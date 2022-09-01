import React from "react";
import { useState } from "react";
const PersonalInfo = ({ cvPersonalInfo }) => {
  const [name, setName] = useState(
    cvPersonalInfo.name !== "" ? cvPersonalInfo.name : ""
  );
  const [surname, setSurname] = useState(
    cvPersonalInfo.surname !== "" ? cvPersonalInfo.surname : ""
  );
  const [birthDate, setBirthDate] = useState(
    cvPersonalInfo.birthDate !== "" ? cvPersonalInfo.birthDate : ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    cvPersonalInfo.phoneNumber !== "" ? cvPersonalInfo.phoneNumber : ""
  );
  const [email, setEmail] = useState(
    cvPersonalInfo.email !== "" ? cvPersonalInfo.email : ""
  );
  const [address, setAddress] = useState(
    cvPersonalInfo.address !== "" ? cvPersonalInfo.address : ""
  );

  return (
    <div className="input__group">
      <h4 className="input__group__title">Personal information</h4>
      <input
        className="cv__form__input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => {
          setSurname(e.target.value);
        }}
      />
      <input
        className="cv__form__input"
        type="text"
        onFocus={(e) => {
          e.target.type = "date";
        }}
        placeholder="Birth date"
        value={birthDate}
        onChange={(e) => {
          setBirthDate(e.target.value);
        }}
      />
      <input
        className="cv__form__input"
        type="tel"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <input
        className="cv__form__input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
    </div>
  );
};

export default PersonalInfo;
