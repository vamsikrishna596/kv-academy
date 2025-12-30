import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('eduMartCart');
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('eduMartCart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        if (cart.find(item => item.id === product.id)) {
            toast.error('Item already in cart');
            return;
        }
        setCart([...cart, product]);
        toast.success('Added to cart');
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
        toast.success('Removed from cart');
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        const subtotal = cart.reduce((total, item) => total + item.price, 0);
        const commission = subtotal * 0.1; // 10% Platform fee
        const total = subtotal + commission;
        return { subtotal, commission, total };
    };

    const value = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
