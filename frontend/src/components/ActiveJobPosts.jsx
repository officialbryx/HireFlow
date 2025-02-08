import React from "react";
import "./ActiveJobPosts.css";

const ActiveJobPosts = () => {
  return (
    <div className="job-list">
      <h3>Your Job Posts</h3>
      <div className="job-card">
        <h4>Backend Developer</h4>
        <p>SkyTech Solutions Inc.</p>
        <p>Makati City, Metro Manila</p>
        <span>23h ago</span>
      </div>
      <div className="job-card">
        <h4>VueJS Developer</h4>
        <p>SkyTech Solutions Inc.</p>
        <p>Makati City, Metro Manila</p>
        <span>1d ago</span>
      </div>
    </div>
  );
};

export default ActiveJobPosts;
