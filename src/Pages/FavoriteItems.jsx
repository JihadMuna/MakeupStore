import React, { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContextComponent";
import styles from "../Pages/styles/FavoriteItems.module.css";

function FavoriteItems() {
  const { favorite } = useContext(FavoriteContext);
  const { addToCart } = useContext(CartContext);
  const { product, products } = useContext(ProductsContext);

  return (
    <div className={styles.favContainer}>
      <h2>Your Favorite Items:</h2>
      <div>
        {favorite?.length === 0 ? (
          <p>No items in the Favorites</p>
        ) : (
          <ul className={styles.cartList}>
            {cart?.map((item) => (
              <li key={item.id} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <h1>{item.name}</h1>
                  <img src={item.image} alt="item-img" />
                  <h2>${item.price}</h2>
                </div>
                <button
                  onClick={() => deleteProduct(item.id)}
                  className={styles.deleteButton}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => addToCart(product.id, products)}
          className={styles.addToCartButton}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default FavoriteItems;
