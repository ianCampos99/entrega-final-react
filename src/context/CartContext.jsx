import React, { createContext, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isItemInCart(item.id)) {
            setCart(
                cart.map((prod) =>
                prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
                )
            );
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        setCart(cart.filter((prod) => prod.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const isItemInCart = (itemId) => {
        return cart.some((prod) => prod.id === itemId);
    };

    const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);
    const totalPrice = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

    const contextValue = {
        cart,
        addItem,
        removeItem,
        clearCart,
        isItemInCart,
        totalQuantity,
        totalPrice,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};