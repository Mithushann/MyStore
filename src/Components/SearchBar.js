import React from 'react';
import './SearchBar.css';

const SearchBar = ({value, onChange}) =>{
    return(
            <input  type="text"
                    className="custom-text-input"
                    placeholder="type the name of the product here..."
                    value={value}
                    onChange={onChange} />
    );

};

export default SearchBar;