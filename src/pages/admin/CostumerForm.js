// src/pages/admin/CustomerForm.js
import React from 'react';

function CustomerForm({ formState, handleInputChange, handleFormSubmit, isEditing }) {
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>{isEditing ? 'Kunden Bearbeiten' : 'Kunden Erstellen'}</h2>
      <div>
        <label>Vorname:</label>
        <input
          type="text"
          name="firstName"
          value={formState.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Nachname:</label>
        <input
          type="text"
          name="lastName"
          value={formState.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Strasse:</label>
        <input
          type="text"
          name="street"
          value={formState.street}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Telefon Nummer:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formState.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">{isEditing ? 'Aktualisieren' : 'Erstellen'}</button>
    </form>
  );
}

export default CustomerForm;
