import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';
import SearchBar from './SearchBar';
import { LoginButton, LogoutButton } from './LogInAndOut';
import { useAuth0 } from '@auth0/auth0-react';

const TopBar = ({ searchValue, onSearchChange, cartCount }) => {
  const [activeMenu, setActiveMenu] = useState('home');
  const { isAuthenticated, user } = useAuth0();
  const [message, setMessage] = useState("");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="topbar">
      <div className="topbar-logo">
        <img src="/img/home.png" alt="logo" className="logo" />
      </div>

      <SearchBar onChange={onSearchChange} value={searchValue} />

      <div className="topbar-menu-button" onClick={() => {}}>
        ☰
      </div>

      <div className={`topbar-menu`}>
        <Link
          to="/home"
          className={activeMenu === 'home' ? 'active' : ''}
          onClick={() => handleMenuClick('home')}
        >
          Homeee
        </Link>
        <Link
          to="/cart"
          className={activeMenu === 'cart' ? 'active' : ''}
          onClick={() => handleMenuClick('cart')}
        >
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          Cart
        </Link>
        <Link
          to="/contact"
          className={activeMenu === 'contact' ? 'active' : ''}
          onClick={() => handleMenuClick('contact')}
        >
          Contact
        </Link>

        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default TopBar;