import './App.css';
import MenuItem from './components/MenuItem';
import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];



function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [itemQuantities, setItemQuantities] = useState({});

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
    setItemQuantities(prevQuantities => ({
      ...prevQuantities,
      [item.id]: (prevQuantities[item.id] || 0) + 1
    }));
  };


  const removeFromCart = (menuItem) => {
    let itemIndex = cart.findIndex(item => item.id === menuItem.id);
    let newCart = [...cart];
    if(itemIndex > -1) {
      newCart.splice(itemIndex, 1);
      setCart(newCart);
      setTotal(total - menuItem.price);
      setItemQuantities(prevQuantities => ({
        ...prevQuantities,
        [menuItem.id]: Math.max(0, (prevQuantities[menuItem.id] || 1) - 1)
      }));
    }
  };
  const clearCart = () => {
    setCart([]);
    setTotal(0);
    setItemQuantities(0);
  };

  const order = () => {
    let orderDetails = 'Order placed!\n\nYour order items:\n';
    for (const [itemId, quantity] of Object.entries(itemQuantities)) {
      if (quantity > 0) {
        const item = menuItems.find(item => item.id === parseInt(itemId));
        orderDetails += `${item.title}: Quantity ${quantity}\n`;
      }
    }
    orderDetails += `\nYour total is: $${total.toFixed(2)}`;
    alert(orderDetails);
  };

  
  return (
    <div className="container menu-container">
      <img src='images/pandas_express.png' alt="Campus Cafe Logo" className="logo" />
      <h1 className="title_h1">Delicious From-Scratch Recipes Close at Hand</h1>
      <h2 className="title_h2">The Fresh Choice of UT!</h2>

      {menuItems.map(item => (
        <MenuItem
          key={item.id}
          title={item.title}
          description={item.description}
          imageName={item.imageName}
          price={item.price}
          addToCart={() => addToCart(item)}
          removeFromCart={() => removeFromCart(item)}
          quantity={itemQuantities[item.id] || 0}
        />
      ))}
      <div className='total-price-bar'>
        <div className="subtotal">
          Subtotal: ${total.toFixed(2)}
        </div>
        <button onClick={() => order()}>Order</button>
        <button onClick={clearCart}>Clear All</button>
      </div>
    </div>
  );
}



export default App;
