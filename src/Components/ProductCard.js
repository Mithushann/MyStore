// ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, image, price, details, onClick }) => {
    return (
        <div className="product-card" onClick={onClick}>
            <div className="product-details">
                <h2 className="product-name">{name}</h2>
                <p className="product-price">${price}</p>
                <p className="product-description">{details}</p>
            </div>
            <div className="hover-text">Click to add {name} to cart</div>
        </div>
    );
}

export default ProductCard;
