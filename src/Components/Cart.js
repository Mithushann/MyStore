import React, { useState, useEffect } from 'react';
import './Cart.css';
import { useAuth0 } from '@auth0/auth0-react';
import CustomButton from './CustomButton';
import { doc, setDoc } from 'firebase/firestore';
import database from "../firebase";

const Cart = ({ cartList }) => {
    const { isAuthenticated, user } = useAuth0();

    const [localCartList, setLocalCartList] = useState(cartList);

    useEffect(() => {
        setLocalCartList(cartList);
    }, [cartList]);

    const incrementProductCount = (productId) => {
        setLocalCartList(prevList =>
            prevList.map(product =>
                product.id === productId
                    ? { ...product, count: product.count + 1 }
                    : product
            )
        );
    };

    const decrementProductCount = (productId) => {
        setLocalCartList(prevList =>
            prevList.map(product =>
                product.id === productId && product.count > 0
                    ? { ...product, count: product.count - 1 }
                    : product
            )
        );
    };

    const sendCartList = async () => {
        if (isAuthenticated) {
            try {
                const cartRef = doc(database, `users/${user.name}`);
                await setDoc(cartRef, { cartList: localCartList });
                console.log("Cart list successfully sent to Firestore");
            } catch (error) {
                console.error("Error sending cart list: ", error);
            }

            setLocalCartList([]);
        }
    };

    return (
        <div className="cart-container">
            {localCartList.length === 0 ? (
                <div className="cart-empty-message">
                    <h3>Cart is empty</h3>
                </div>
            ) : (
                <div className="cart-list">
                    {localCartList.map((product) => (
                        <div className="cart-list-child" key={product.id}>
                            <div className="cart-element-left">
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                            </div>
                            <div className="cart-element-right">
                                <div onClick={() => incrementProductCount(product.id)} className="cart-quantity"> ⮝ </div>
                                <div> {product.count} </div>
                                <div onClick={() => decrementProductCount(product.id)} className="cart-quantity"> ⮟ </div>
                            </div>
                        </div>
                    ))}
                    <div>
                        {isAuthenticated ? (
                            <CustomButton onClick={sendCartList}>
                                Send Cart List
                            </CustomButton>
                        ) : (
                            <h3>You need to log in to order...</h3>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
