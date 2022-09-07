import React from "react";

const PersonalInfo = ({ cvPersonalInfo, updatePersonalInfo, inputState }) => {
  return (
    <div className="input__group">
      <h4 className="input__group__title">Personal information</h4>
      <input
        className="cv__form__input"
        type="text"
        placeholder="Name"
        value={cvPersonalInfo.name}
        name="name"
        onChange={(e) => {
          updatePersonalInfo(e);
        }}
        disabled={inputState}
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Surname"
        value={cvPersonalInfo.surname}
        name="surname"
        onChange={(e) => {
          updatePersonalInfo(e);
        }}
        disabled={inputState}
      />
      <input
        className="cv__form__input"
        type="text"
        onFocus={(e) => {
          e.target.type = "date";
        }}
        placeholder="Birth date"
        value={cvPersonalInfo.birthDate}
        name="birthDate"
        onChange={(e) => {
          updatePersonalInfo(e);
        }}
        disabled={inputState}
      />
      <input
        className="cv__form__input"
        type="tel"
        placeholder="Phone number"
        value={cvPersonalInfo.phoneNumber}
        name="phoneNumber"
        onChange={(e) => {
          updatePersonalInfo(e);
        }}
        disabled={inputState}
      />
      <input
        className="cv__form__input"
        type="email"
        placeholder="Email"
        value={cvPersonalInfo.email}
        name="email"
        onChange={(e) => {
          updatePersonalInfo(e);
        }}
        disabled={inputState}
      />
      <input
        className="cv__form__input"
        type="text"
        placeholder="Address"
        value={cvPersonalInfo.address}
        name="address"
        onChange={(e) => {
          updatePersonalInfo(e);
        }}
        disabled={inputState}
      />
    </div>
  );
};

export default PersonalInfo;
