// src/components/EmployeeForm.js
import React, { useState } from 'react';
import './EmployeeForm.css';

function EmployeeForm() {
  const [employee, setEmployee] = useState({
    fullName: '',
    email: '',
    department: '',
    jobRole: ''
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Employee added: ${JSON.stringify(employee)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h2>Add New Employee</h2>
      <label>Full Name:</label>
      <input type="text" name="fullName" onChange={handleChange} />
      <label>Email Address:</label>
      <input type="email" name="email" onChange={handleChange} />
      <label>Department:</label>
      <input type="text" name="department" onChange={handleChange} />
      <label>Job Role:</label>
      <input type="text" name="jobRole" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;
