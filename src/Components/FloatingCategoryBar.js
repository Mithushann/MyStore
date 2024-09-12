import React, { useState } from 'react';
import Draggable from 'react-draggable'; // Import the library
import { FaApple, FaEgg, FaFish, FaBeer, FaBreadSlice, FaBath, FaTh, FaTools, FaTv, FaSprayCan, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FloatingCategoryBar.css';

const categories = [
    "All",
    "Fruits and veggies", "Dairy and eggs", "Meat and seafood", 
    "Beverages", "Bakery", "Personal care", 
    "Cleaning supplies", "Kitchen gadgets", "Electronics" 
];

const icons = {
    "All": <FaTh />,
    "Fruits and veggies": <FaApple />,
    "Dairy and eggs": <FaEgg />,
    "Meat and seafood": <FaFish />,
    "Beverages": <FaBeer />,
    "Bakery": <FaBreadSlice />,
    "Personal care": <FaBath />,
    "Cleaning supplies": <FaSprayCan />,
    "Kitchen gadgets": <FaTools />,
    "Electronics": <FaTv />,
};

const FloatingCategoryBar = ({ setProductsFun }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0 });
    const [hoveredCategory, setHoveredCategory] = useState('');

    const navigateToCategory = (category) => {
        setProductsFun(category);
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleMouseMove = (e) => {
        setTooltipPosition({
            left: e.clientX,
            top: e.clientY + 20 // Adjust this value to offset the tooltip below the cursor
        });
    };

    return (
        <Draggable bounds="parent">
            <div className={`floating-menu ${isExpanded ? 'expanded' : 'collapsed'}`}>
                <button className="toggle-button" onClick={toggleExpand}>
                    {isExpanded ? <FaChevronDown /> : <FaChevronUp />}
                </button>
                {isExpanded && categories.map((category, index) => (
                  <div key={index} className="category-wrapper">
                    <button
                        className="category-button"
                        onClick={() => navigateToCategory(category)}
                        onMouseEnter={() => setHoveredCategory(category)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setHoveredCategory('')}
                    >
                        {icons[category]}
                    </button>
                    {hoveredCategory === category && (
                      <div className="category-text" style={{ left: tooltipPosition.left/100, top: tooltipPosition.down }}>
                          {category}
                      </div>
                    )}
                  </div>
                ))}
            </div>
        </Draggable>
    );
};

export default FloatingCategoryBar;