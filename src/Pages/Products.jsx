import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContextComponent";
import styles from "./styles/Products.module.css";
import { FiHeart } from "react-icons/fi";
import { CartContext } from "../context/CartContext";
import { FavoriteContext } from "../context/FavoriteContext";
import { ThreeDots } from "react-loader-spinner";
import BackgroundImage from "../Pages/assests/background.png";
import { ToastContainer, toast } from "react-toastify";

function Products({ loggedIn, isAdmin }) {
  const { products, deleteProduct } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const { addToFavourite } = useContext(FavoriteContext);
  const [loading, setLoading] = useState(true);

  // State to store selected category and search term
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const notify = () => toast("Wow so easy!");

  // Extract unique categories from products
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  useEffect(() => {
    // Simulate an API call delay with setTimeout
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array to run the effect only once

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchTerm(""); // Clear search term when changing categories
  };

  const handleSearch = (searchInput) => {
    if (searchInput) {
      setSearchResults(searchInput);
      setSearchTerm("");
      return;
    }

    const timeoutId = setTimeout(() => {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchResults(results);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="pink"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return (
    <>
      <div className={styles.body}>
        <img
          className={styles.background}
          src={BackgroundImage}
          alt="background"
        />
        <div className={styles.categoryFilter}>
          <button
            className={styles.subCategory}
            onClick={() => handleCategoryChange("")}
          >
            All
          </button>
          {uniqueCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <ul className={styles.cont}>
          {products
            .filter(
              (product) =>
                (!selectedCategory || product.category === selectedCategory) &&
                (!searchTerm ||
                  product.name.toLowerCase().includes(searchTerm.toLowerCase()))
            )
            .map((product) => (
              <li key={product.id}>
                <div className={styles.productcontainer}>
                  {selectedCategory && <h2>{selectedCategory}</h2>}
                  <div className={styles.titlecont}>
                    <h3>{product.type}</h3>
                    {loggedIn && (
                      <p
                        className={styles.heart}
                        onClick={(e) => {
                          e.preventDefault();
                          addToFavourite(product.id, products);
                        }}
                      >
                        <FiHeart />
                      </p>
                    )}
                  </div>
                  <img src={product.image} alt="product-image" />
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/products/${product.id}`}
                    className={styles.productLink}
                    state={{ product }}
                  >
                    <h4 className={styles.productName}>{product.name}</h4>{" "}
                  </Link>
                  <h4
                    style={{
                      color: "red",
                      fontWidth: "bold",
                      margin: "14px 0 ",
                    }}
                  >
                    {product.price} $
                  </h4>
                  <div className={styles.buttonscont}>
                    {loggedIn && (
                      <button
                        className={styles.cartButton}
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product.id, products);
                        }}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                  <div className={styles.buttonscont}>
                    {/* Link to the EditProduct page */}
                    {isAdmin && (
                      <div className={styles.adminControls}>
                        <Link
                          to={`/edit-product/${product.id}`}
                          className={styles.editButton}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            deleteProduct(product.id);
                          }}
                          className={styles.deleteButton}
                        >
                          X
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Products;
