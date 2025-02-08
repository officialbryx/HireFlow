import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import JobPosts from "./components/JobPost";
import SettingsPage from "./components/SettingsPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<h2>Dashboard Page</h2>} />
        <Route path="/job-post" element={<JobPosts/>} />
        <Route path="/settings" element={<SettingsPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
