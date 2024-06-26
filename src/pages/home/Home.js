import React, { useState } from 'react';
import './Home.css';
import { FaTrash } from 'react-icons/fa';
// Importieren der Bilder
import margheritaImage from '../../images/pizza_margherita.png';
import pepperoniImage from '../../images/pizza_pepperoni.png';
import hawaiianImage from '../../images/pizza_hawaiian.png';
import veggieImage from '../../images/pizza_veggie.png';
import meatLoversImage from '../../images/pizza_meatlovers.png';
import buffaloChickenImage from '../../images/pizza_buffalochicken.png';

const pizzas = [
  { id: 1, name: 'Margherita', description: 'Tomato sauce, mozzarella, and oregano', image: margheritaImage },
  { id: 2, name: 'Pepperoni', description: 'Tomato sauce, mozzarella, and pepperoni', image: pepperoniImage },
  { id: 3, name: 'Hawaiian', description: 'Tomato sauce, cheese, ham, and pineapple', image: hawaiianImage },
  { id: 4, name: 'Veggie', description: 'Tomato sauce, mozzarella, and assorted vegetables', image: veggieImage },
  { id: 5, name: 'Meat Lovers', description: 'Tomato sauce, mozzarella, and assorted meats', image: meatLoversImage },
  { id: 6, name: 'Buffalo Chicken', description: 'Buffalo sauce, chicken, and onions', image: buffaloChickenImage },
];

function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find(item => item.id === pizza.id);
      if (existingPizza) {
        return prevCart.map(item =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (pizzaId) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find(item => item.id === pizzaId);
      if (existingPizza.quantity > 1) {
        return prevCart.map(item =>
          item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter(item => item.id !== pizzaId);
      }
    });
  };

  return (
    <div className="home">
      <h1>Welcome to the Main Page</h1>
      <p>This is a test main page for our application.</p>
      <div className="pizza-container">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-box">
            <img src={pizza.image} alt={pizza.name} className="pizza-image"/>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <button onClick={() => addToCart(pizza)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.quantity} x {item.name}</span>
              <FaTrash className="delete-icon" onClick={() => removeFromCart(item.id)} />
            </li>
          ))}
        </ul>
        <button className="buy-button">Buy</button>
      </div>
    </div>
  );
}

export default Home;
