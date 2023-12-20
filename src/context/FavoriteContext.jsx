import React, { createContext, useState } from 'react'

export const FavoriteContext = createContext();

function FavoriteContextComponent({ children }) {
    const [favorite, setFavorite] =useState([]);

    const addToFavourite = (productId, products) => {
        const productToFav = products?.find((product) => product?.id === productId);
      setFavorite((prevFavorite) => [...prevFavorite, productToFav]);
    
        // Log to the console and show a modal message
        console.log(`Product added to favorite list: ${productToFav.name}`);
      };
    

  return (
<FavoriteContext.Provider value={{favorite , addToFavourite}}>{children}</FavoriteContext.Provider>
  )
}

export default FavoriteContextComponent;
