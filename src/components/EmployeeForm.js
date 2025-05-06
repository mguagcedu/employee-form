import React, { useState } from 'react';
import './EmployeeForm.css';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: '',
    jobRole: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setFormData({ fullName: '', email: '', department: '', jobRole: '' });
  };

  return (
    <div className="form-container">
      <h2>Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />

        <label>Email Address:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Department:</label>
        <input type="text" name="department" value={formData.department} onChange={handleChange} />

        <label>Job Role:</label>
        <input type="text" name="jobRole" value={formData.jobRole} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
