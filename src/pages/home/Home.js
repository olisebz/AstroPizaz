// MainPage.js
import React from 'react';
import './Home.css';

const pizzas = [
  { id: 1, name: 'Margherita', description: 'Tomato sauce, mozzarella, and oregano' },
  { id: 2, name: 'Pepperoni', description: 'Tomato sauce, mozzarella, and pepperoni' },
  { id: 3, name: 'Hawaiian', description: 'Tomato sauce, cheese, ham, and pineapple' },
  { id: 4, name: 'Veggie', description: 'Tomato sauce, mozzarella, and assorted vegetables' },
  { id: 5, name: 'Meat Lovers', description: 'Tomato sauce, mozzarella, and assorted meats' },
  { id: 6, name: 'Buffalo Chicken', description: 'Buffalo sauce, chicken, and onions' },
];

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Main Page</h1>
      <p>This is a test main page for our application.</p>
      <div className="pizza-container">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-box">
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      <button className="buy-button">Buy</button>
    </div>
  );
}

export default Home;