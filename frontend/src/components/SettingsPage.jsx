import React, { useState } from "react";
import "./SettingsPage.css";

const SettingsPage = () => {
  const [accountInfo, setAccountInfo] = useState({
    fullName: "Bryan Tiamzon",
    email: "bryph@gmail.com",
    password: "********",
    company: "SkyTech Solutions Inc.",
  });

  const [personalSettings, setPersonalSettings] = useState({
    language: "English",
    location: "Philippines",
  });

  const handleEdit = (field, value) => {
    setAccountInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-section">
        <h3>Account Info</h3>
        {Object.keys(accountInfo).map((key) => (
          <div className="info-row" key={key}>
            <span>{key.replace(/([A-Z])/g, " $1")}: {accountInfo[key]}</span>
            <button className="edit-btn">✎</button>
          </div>
        ))}
      </div>

      <div className="settings-section">
        <h3>Personal</h3>
        <div className="info-row">
          <span>Language</span>
          <select 
            value={personalSettings.language} 
            onChange={(e) => setPersonalSettings({ ...personalSettings, language: e.target.value })}
          >
            <option>English</option>
            <option>Filipino</option>
          </select>
        </div>
        <div className="info-row">
          <span>Account Location</span>
          <select 
            value={personalSettings.location} 
            onChange={(e) => setPersonalSettings({ ...personalSettings, location: e.target.value })}
          >
            <option>Philippines</option>
            <option>United States</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
