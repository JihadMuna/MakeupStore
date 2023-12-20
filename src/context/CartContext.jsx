import React, { createContext, useState } from 'react'

export const CartContext = createContext();

function CartContextComponent({ children }) {
    const [cart, setCart] =useState([]);

    const addToCart = (productId, products) => {
        const productToAdd = products?.find((product) => product?.id === productId);
      setCart((prevCart) => [...prevCart, productToAdd]);
    
        // Log to the console and show a modal message
        console.log(`Product added to shopping cart: ${productToAdd.name}`);
      };
    

  return (
<CartContext.Provider value={{cart , addToCart}}>{children}</CartContext.Provider>
  )
}

export default CartContextComponent;
