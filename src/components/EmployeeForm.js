// src/components/EmployeeForm.js
import React, { useState } from 'react';
import './EmployeeForm.css';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    department: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Data:', formData);
    alert('Employee Added Successfully!');
  };

  return (
    <div className="employee-form">
      <h2>New Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Position:
          <input name="position" value={formData.position} onChange={handleChange} required />
        </label>
        <label>
          Department:
          <input name="department" value={formData.department} onChange={handleChange} required />
        </label>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
