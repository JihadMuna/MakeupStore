import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import styles from "./Mainbar.module.css";

const Mainbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryClick = (category) => {
    console.log(`Navigating to ${category} page`);
    // Use the navigate function from react-router-dom to navigate
    navigate(`/${category.toLowerCase()}`);
    // Close the dropdown
    setDropdownOpen(false);
  };

  return (
    <header className={styles.header2}>
      <nav>
        <ul>
          <li className={styles.menu} onClick={toggleDropdown}>
            <FiMenu />
          </li>
          <li className={styles.title}>JOJO MAKEUP STORE</li>
        </ul>
      </nav>
      <nav className={styles.sidebar}>
        <ul className={styles.icons}>
          <li className={styles.search} onClick={() => handleCategoryClick("search-item")}> 
            <IoSearchOutline />
          </li>
          <li className={styles.favorite} onClick={() => handleCategoryClick("favorite-items")}>
            <FiHeart />
          </li>
          <li className={styles.cart} onClick={() => handleCategoryClick("shopping-cart")}>
            <TiShoppingCart />
          </li>
        </ul>
      </nav>
      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className={styles.dropdownContainer}>
          <ul className={styles.dropdownMenu}>
            <li onClick={() => handleCategoryClick("face-makeup")}>Face Makeup</li>
            <li onClick={() => handleCategoryClick("eye-makeup")}>Eye Makeup</li>
            <li onClick={() => handleCategoryClick("lip-makeup")}>Lip Makeup</li>
            <li onClick={() => handleCategoryClick("skin-care")}>Skin Care</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Mainbar;
