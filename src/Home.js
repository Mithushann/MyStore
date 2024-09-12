import React, { useState } from 'react';
import ProductCard from './Components/ProductCard';
import FloatingCateoryBar from './Components/FloatingCategoryBar';
import AllProducts from './products/AllProducts.js'; // Adjust the path as needed
import { fruitsandveggies, dairyandeggs, meatandseafood, beverages, bakery, personalcare, cleaningsupplies, kitchenandgadgets, electronics } from './products/productByCategory.js';
import './Home.css';
import { useAuth0 } from '@auth0/auth0-react';

const Home = ({searchValue, onChange}) => {

    const { isAuthenticated } = useAuth0();
    const [products, setProducts] = useState(AllProducts);



    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const handleNotLoggedIn = (product) => {
        if(!isAuthenticated) {alert("Please log in to add items to cart")}
        else{ onChange(product)}
    }

    const setProductsFun = (category) => {
        switch(category) {
            case "Fruits and veggies":
                setProducts(fruitsandveggies);
                break;
            case "Dairy and eggs":
                setProducts(dairyandeggs);
                break;
            case "Meat and seafood":
                setProducts(meatandseafood);
                break;
            case "Beverages":
                setProducts(beverages);
                break;
            case "Bakery":
                setProducts(bakery);
                break;
            case "Personal care":
                setProducts(personalcare);
                break;
            case "Cleaningsupplies":
                setProducts(cleaningsupplies);
                break;
            case "Kitchen gadgets":
                setProducts(kitchenandgadgets);
                break;
            case "Electronics":
                setProducts(electronics);
                break;
            default:
                setProducts(AllProducts);
        }
    }

    return (
        <div> 
            <FloatingCateoryBar setProductsFun={setProductsFun}/>
            <div className="product-list">
                { filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        details={product.details}
                        onClick={()=>handleNotLoggedIn(product)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;