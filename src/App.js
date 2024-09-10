import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import TopBar from './Components/TopBar';
import Home from './Home';
import Cart from './Components/Cart';
import './App.css';

const App = () =>  {
    const [searchValue, setSearchValue] = useState('');
    const [cartList, setCartList] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const handleSearchChange = (event) => {
      setSearchValue(event.target.value);
    };

    const handleAddToCart = (product) => {
     
        setCartList((prevCartList) => {
            const existingProduct = prevCartList.find(item => item.id === product.id);
            
            if (existingProduct) {
                return prevCartList.map(item =>
                    item.id === product.id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                setCartCount(cartCount + 1);
                return [...prevCartList, { ...product, count: 1 }];
            }
        });

        
    };

    return (
        <Router>
            <Auth0Provider
                domain = {process.env.REACT_APP_AUTH0_DOMAIN}
                clientId= {process.env.REACT_APP_AUTH0_CLIENT_ID}
                authorizationParams={{
                        redirect_uri: window.location.origin
                }}
            >
            <div className="App">
                <TopBar searchValue={searchValue} onSearchChange={handleSearchChange} cartCount={cartCount}/>
                    <Routes>
                        <Route path="/" element={<Home searchValue={searchValue} onChange={handleAddToCart}/>} />
                        <Route path="/home" element={<Home searchValue={searchValue} onChange={handleAddToCart} />} />
                        <Route path="/cart" element={<Cart cartList={cartList}/>} />
                    </Routes>
            </div>
            </Auth0Provider>
        </Router>
    );
}

export default App;