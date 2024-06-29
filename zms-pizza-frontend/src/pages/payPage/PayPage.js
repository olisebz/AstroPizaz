import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PayPage.css';

function PayPage() {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment successful! Your order will be delivered soon.");
    navigate('/');
  };

  return (
    <div className="pay-page">
      <h1>Payment Page</h1>
      <p>Thank you for your order. Please proceed with the payment to complete your purchase.</p>
      <button onClick={handlePayment} className="pay-button">Pay Now</button>
    </div>
  );
}

export default PayPage;
