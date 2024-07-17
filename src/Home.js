import React from 'react';
import ProductCard from './Components/ProductCard';
import products from './products/productData.js'; // Adjust the path as needed
import './Home.css';
import { useAuth0 } from '@auth0/auth0-react';

const Home = ({searchValue, onChange}) => {

    const { isAuthenticated } = useAuth0();

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const handleNotLoggedIn = (product) => {
        if(!isAuthenticated) {alert("Please log in to add items to cart")}
        else{ onChange(product)}
    }


    return (
        <div className="product-list">
            {filteredProducts.map(product => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    details={product.details}
                    onClick={()=>handleNotLoggedIn(product)}
                />
            ))}
        </div>
    );
}

export default Home;
