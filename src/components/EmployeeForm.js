import React, { useState } from 'react';
import './EmployeeForm.css';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
    email: '',
    startDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Employee Data:', formData);
    alert('Form submitted! Check the console for data.');
  };

  return (
    <div className="employee-form-container">
      <h2>New Employee Form</h2>
      <form onSubmit={handleSubmit} className="employee-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Position:
          <input type="text" name="position" value={formData.position} onChange={handleChange} required />
        </label>

        <label>
          Department:
          <input type="text" name="department" value={formData.department} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Start Date:
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
