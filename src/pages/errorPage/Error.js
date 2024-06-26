import React, { useState } from 'react';
import pizzaImage from '../../images/icon_pizza.png';
import HomePage from '../homePage/Home.js'; 
import './Error.css'; 

function Error() {
  const [redirectToHome, setRedirectToHome] = useState(false);

  if (redirectToHome) {
    return <HomePage />;
  }

  return (
    <div className="error-container">
      <h1 className="error-title">4<img src={pizzaImage} alt="Pizza" className="error-image" />4</h1>
      <h2 className="error-message">ERROR</h2>
      <p className="error-message">Page Not Found</p>
      <button className="error-button" onClick={() => setRedirectToHome(true)}>Back to Home</button>
    </div>
  );
}

export default Error;
