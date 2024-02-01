import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ loggedIn, username, isAdmin, onLogout }) => {
  console.log("Navbar Props:", loggedIn, username, isAdmin);

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
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/custom-product">Custom Product</Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.sidebar}>
        <ul className={styles.icons}>
          {loggedIn ? (
            <>
              {isAdmin ? (
                <li className={styles.controls}>
                  <p>
                    <Link to="/profile">
                      <CgProfile />
                    </Link>
                  </p>
                  {/* Add link to the admin page */}
                  <p>
                    {" "}
                    <Link to="/admin/add-product">Add Product</Link>
                  </p>
                </li>
              ) : (
                <li>
                  {loggedIn && (
                    <p className={styles.profile}>
                      <CgProfile />
                    </p>
                  )}
                </li>
              )}
              <li className={styles.controls}>
                <Link to="/" onClick={onLogout}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
