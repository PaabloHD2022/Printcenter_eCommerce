import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addProduct = (item, cantidad) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.cantidad + cantidad } : product
            }));
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    }
        
    const totalPrice = () =>  {
        return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
    }

    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const clearCart = () => setCart([]);
    
    return (
        <CartContext.Provider  value={{
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider