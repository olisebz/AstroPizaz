// src/pages/admin/CustomerForm.js
import React from 'react';

function CustomerForm({ formState, handleInputChange, handleFormSubmit, isEditing }) {
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>{isEditing ? 'Edit Customer' : 'Create Customer'}</h2>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formState.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formState.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Street:</label>
        <input
          type="text"
          name="street"
          value={formState.street}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formState.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">{isEditing ? 'Update' : 'Create'}</button>
    </form>
  );
}

export default CustomerForm;
