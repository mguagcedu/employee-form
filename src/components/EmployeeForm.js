import React, { useState } from 'react';

function EmployeeForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Employee name submitted: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Employee Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
