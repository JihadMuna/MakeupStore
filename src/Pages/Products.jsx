import React from "react";
import { ProductsContext } from "../context/ProductsContextComponent";
import styles from "./styles/Products.module.css";
import { useContext } from "react";

function Products() {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <ul className={styles.cont}>
        {products.map((product) => (
          <li key={product.id}>
            <div className={styles.productcontainer}>
              <h1>Title : {product.name}</h1>
              <img src={product.image} alt="product-image" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
