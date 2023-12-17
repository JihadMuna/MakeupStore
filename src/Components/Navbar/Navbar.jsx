import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ loggedIn, username }) => {
  return (
    <header className={styles.header1}>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/custom-product">Custom Product</Link>
          </li>
        </ul>
      </nav>
      <nav className="side-bar">
        <ul>
          {loggedIn ? (
            <li>
              <Link to="/shopping-cart">Shopping Cart</Link>
            </li>
          ) : (
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          )}
        </ul>
      </nav>

      {loggedIn && <p>Welcome, {username}!</p>}
    </header>
  );
};

export default Navbar;
