import React from "react";
import "./CreateJobForm.css";

const CreateJobForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="create-form">
      <h3>Create a new job post</h3>

      <div className="form-group">
        <label>Job Title</label>
        <input
          type="text"
          name="jobTitle"
          placeholder="Enter a job title name, like 'Software Developer'"
          value={formData.jobTitle}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Company Name</label>
        <input
          type="text"
          name="companyName"
          placeholder="Enter the company name"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <div className="form-column">
          <label>Responsibilities</label>
          <textarea
            name="responsibilities"
            placeholder="Add responsibilities..."
            value={formData.responsibilities}
            onChange={handleChange}
          />
        </div>
        <div className="form-column">
          <label>Qualifications</label>
          <textarea
            name="qualifications"
            placeholder="Add qualifications..."
            value={formData.qualifications}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Enter the location..."
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Career</label>
        <input
          type="text"
          name="workField"
          placeholder="Enter the work field..."
          value={formData.workField}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Type of Work</label>
        <input
          type="text"
          name="typeOfWork"
          placeholder="Enter the type of work..."
          value={formData.typeOfWork}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Salary</label>
        <input
          type="text"
          name="salary"
          placeholder="Enter the salary for this job..."
          value={formData.salary}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CreateJobForm;
