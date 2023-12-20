import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContextComponent";
import styles from "./styles/ShoppingCart.module.css";

function ShoppingCart() {
  const { cart } = useContext(CartContext);
  const { deleteProduct } = useContext(ProductsContext);

  return (
    <div className={styles.shoppingCart}>
      <h2>Your Shopping Cart:</h2>
      <div>
        {cart?.length === 0 ? (
          <p>No items in the cart</p>
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
        <button className={styles.buyButton}>Buy Products</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
