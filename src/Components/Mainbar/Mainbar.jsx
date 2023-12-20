// Mainbar.jsx
import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import styles from "./Mainbar.module.css";
import { useNavigate } from "react-router-dom";
import NavLogo from "./nav-logo.png";

const Mainbar = ({ loggedIn, isAdmin }) => {
  let navigate = useNavigate();
  return (
    <header className={styles.header2}>
      <nav>
        <ul>
          <li>
            <img className={styles.logo} src={NavLogo} alt="nav-logo" />
          </li>
          <li className={styles.title}>JOJO MAKEUP STORE</li>
        </ul>
      </nav>
      <nav className={styles.sidebar}>
        <ul className={styles.icons}>
          {loggedIn ? (
            <>
              <li
                className={styles.favorite}
                onClick={() => navigate("/favorite-items")}
              >
                <FiHeart />
              </li>
              <li
                className={styles.cart}
                onClick={() => navigate("/shopping-cart")}
              >
                <TiShoppingCart />
              </li>{" "}
            </>
          ) : (
            <p></p>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Mainbar;
