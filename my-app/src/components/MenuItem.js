import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price, addToCart, removeFromCart, quantity }) => {
    
    return (
        <div className="row menu-item">
            <div className="col-4">
                <img src={`images/${imageName}`} alt={title} className="menu-image img-fluid"/>
            </div>
            <div className="col-sm-8">
                <h3 className="menu-title">{title}</h3>
                <p className="menu-description">{description}</p>
                <div className="item-action">
                    <span className="price">${price}</span>
                    <div className="quantity-wrapper">
                        <button onClick={removeFromCart} className="quantity-btn">-</button>
                        <span className="quantity">{quantity}</span>
                        <button onClick={addToCart} className="quantity-btn">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
