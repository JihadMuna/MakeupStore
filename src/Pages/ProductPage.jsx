import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContextComponent";
import styles from "./styles/ProductPage.module.css";
import { FiHeart } from "react-icons/fi";

function ProductPage() {
  const {
    products,
    addToFavourite,
    addToCart,
    deleteProduct,
    loggedIn,
    isAdmin,
  } = useContext(ProductsContext);
  const [selectedProductId, setSelectedProductId] = useState(true);

  const selectedProduct = products.find(
    (product) => product.id === selectedProductId
  );

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const { state } = useLocation();
  console.log(state);
  return (
    <div className={styles.body}>
      <div className={styles.productContainer}>
        <h2>Product Details</h2>
        {selectedProduct ? (
          <div className={styles.productDetails}>
            <div className={styles.titleCont}>
              <h3>{selectedProduct.type}</h3>
              {loggedIn && (
                <p
                  className={styles.heart}
                  onClick={() => addToFavourite(selectedProduct.id, products)}
                >
                  <FiHeart />
                </p>
              )}
            </div>
            <img src={selectedProduct.image} alt="product-image" />
            <h4>{selectedProduct.name}</h4>
            <h4 style={{ color: "red", fontWeight: "bold" }}>
              {selectedProduct.price} $
            </h4>
            <p>{selectedProduct.description}</p>
            <div className={styles.buttonsCont}>
              {loggedIn && (
                <button
                  className={styles.cartButton}
                  onClick={() => addToCart(selectedProduct.id, products)}
                >
                  Add to cart
                </button>
              )}
            </div>
            {isAdmin && (
              <div className={styles.adminControls}>
                <Link
                  to={`/edit-product/${selectedProduct.id}`}
                  className={styles.editButton}
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(selectedProduct.id)}
                  className={styles.deleteButton}
                >
                  X
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {state ? (
              <p>Select a product to view details.</p>
            ) : (
              <p>Wrong Path please click on a product </p>
            )}
            <img src={state?.product?.image} />
            <h1>{state?.product?.category}</h1>
            <h1>{state?.product?.name}</h1>
            <h1>{state?.product?.color}</h1>
            <h1>{state?.product?.type}</h1>
            <h1>{state?.product?.price}</h1>
            <h1>{state?.product?.description}</h1>
            <h1>{state?.product?.ingredients}</h1>
            <h1>{state?.product?.volume}</h1>
          </>
        )}
      </div>
      {/* <div className={styles.productList}>
        <h2>Product List</h2>
        <ul className={styles.productCards}>
          {products.map((product) => (
            <li key={product.id} onClick={() => handleProductClick(product.id)}>
              <div className={styles.productCard}>
                <h3>{product.type}</h3>
                <img src={product.image} alt="product-image" />
                <h4>{product.name}</h4>
                <h4 style={{ color: "red", fontWeight: "bold" }}>
                  {product.price} $
                </h4>
                <div className={styles.buttonsCont}>
                  {loggedIn && (
                    <button
                      className={styles.cartButton}
                      onClick={() => addToCart(product.id, products)}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>*/}
    </div>
  );
}

export default ProductPage;
