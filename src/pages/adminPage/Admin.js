// src/pages/admin/Admin.js
import React, { useState } from 'react';
import CustomerForm from './CostumerForm.js';
import CustomerList from './CostumerList.js';
import './Admin.css';

function Admin() {
  const [customers, setCustomers] = useState([
    { firstName: 'John', lastName: 'Doe', street: 'Main St 1', phoneNumber: '123456789' },
    { firstName: 'Jane', lastName: 'Smith', street: 'Second St 2', phoneNumber: '987654321' }
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    street: '',
    phoneNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedCustomers = [...customers];
      updatedCustomers[editingIndex] = formState;
      setCustomers(updatedCustomers);
      setEditingIndex(null);
    } else {
      setCustomers([...customers, formState]);
    }
    setFormState({
      firstName: '',
      lastName: '',
      street: '',
      phoneNumber: ''
    });
  };

  const editCustomer = (index) => {
    setEditingIndex(index);
    setFormState(customers[index]);
  };

  const deleteCustomer = (index) => {
    setCustomers(customers.filter((_, i) => i !== index));
    if (editingIndex === index) {
      setEditingIndex(null);
      setFormState({
        firstName: '',
        lastName: '',
        street: '',
        phoneNumber: ''
      });
    }
  };

  return (
    <div className="admin">
      <CustomerForm
        formState={formState}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        isEditing={editingIndex !== null}
      />
      <CustomerList
        customers={customers}
        editCustomer={editCustomer}
        deleteCustomer={deleteCustomer}
      />
    </div>
  );
}

export default Admin;