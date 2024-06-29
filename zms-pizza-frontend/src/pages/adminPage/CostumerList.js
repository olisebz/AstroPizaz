import React from 'react';

function CustomerList({ customers, editCustomer, deleteCustomer }) {
  return (
    <div className="customer-list">
      <h2>Customer List</h2>
      {customers.map((customer) => (
        <div key={customer.id} className="customer">
          <div>
            <div>{customer.firstName} {customer.lastName}</div>
            <div>{customer.street}</div>
            <div>{customer.phoneNumber}</div>
          </div>
          <div className="customer-buttons">
            <button className="edit-button" onClick={() => editCustomer(customer.id)}>Edit</button>
            <button className="delete-button" onClick={() => deleteCustomer(customer.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomerList;
