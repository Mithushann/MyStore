// CustomButton.js
import React from 'react';
import './CustomButton.css';

const CustomButton = ({ onClick, children, style }) => {
    return (
        <div className="custom-button" onClick={onClick} style={style}>
            {children}
        </div>
    );
};

export default CustomButton;
