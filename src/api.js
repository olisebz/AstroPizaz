import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/customers'
});

export const getCustomers = () => api.get('');
export const getCustomerById = (id) => api.get(`${id}`);
export const createCustomer = (customer) => api.post('', customer);
export const updateCustomer = (id, customer) => api.put(`${id}`, customer);
export const deleteCustomer = (id) => api.delete(`${id}`);
