import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/dashboard" element={<h2>Dashboard Page</h2>} />
        <Route path="/job-post" element={<h2>Job Post Page</h2>} />
        <Route path="/settings" element={<h2>Settings Page</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
