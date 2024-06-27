// src/pages/admin/Admin.js
import React, { useState, useEffect } from 'react';
import CustomerForm from './CostumerForm.js';
import CustomerList from './CostumerList.js';
import './Admin.css';
import { getCustomers, createCustomer, updateCustomer, deleteCustomer } from '../../api.js';

function Admin() {
  const [customers, setCustomers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    street: '',
    phoneNumber: ''
  });

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const response = await getCustomers();
    setCustomers(response.data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const customerToUpdate = customers[editingIndex];
      await updateCustomer(customerToUpdate.id, formState);
    } else {
      await createCustomer(formState);
    }
    setFormState({
      firstName: '',
      lastName: '',
      street: '',
      phoneNumber: ''
    });
    setEditingIndex(null);
    loadCustomers();
  };

  const editCustomer = (index) => {
    setEditingIndex(index);
    setFormState(customers[index]);
  };

  const deleteCustomerById = async (index) => {
    const customerToDelete = customers[index];
    await deleteCustomer(customerToDelete.id);
    loadCustomers();
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
        deleteCustomer={deleteCustomerById}
      />
    </div>
  );
}

export default Admin;