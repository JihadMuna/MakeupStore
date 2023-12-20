import React, { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import Products from "./Pages/Products";
import CustomProduct from "./Pages/CustomProduct";
import AboutUs from "./Pages/AboutUs";
import SignUp from "./Pages/SignUp";
import ProductsContextComponent from "./context/productsContextComponent";
import Mainbar from "./Components/Mainbar/Mainbar";
import FavoriteItems from "./Pages/FavoriteItems";
import ShoppingCart from "./Pages/ShoppingCart";
import AddProduct from "./Pages/AddProduct";
import EditProduct from "./Pages/EditProduct";
import DeleteProduct from "./Pages/DeleteProduct";
import Footer from "./Pages/Footer";
import CartContextComponent from "./context/CartContext";
import FavoriteContextComponent from "./context/FavoriteContext";
import ProductPage from "./Pages/ProductPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(() => {
    const storedLoggedIn = localStorage.getItem("loggedIn");
    return storedLoggedIn ? JSON.parse(storedLoggedIn) : false;
  });

  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || ""
  );

  const [isAdmin, setIsAdmin] = useState(() => {
    const storedIsAdmin = localStorage.getItem("isAdmin");
    return storedIsAdmin ? JSON.parse(storedIsAdmin) : false;
  });

  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const navigate = useNavigate();

  const handleLogin = async (user) => {
    try {
      setLoggedIn(true);

      setUsername(user.username);
      setIsAdmin(user.isAdmin || false);

      localStorage.setItem("loggedIn", true);
      localStorage.setItem("username", user.username);
      localStorage.setItem("isAdmin", user.isAdmin || false);

      navigate("/");
      setCart([]);
      setFavorite([]);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleLogout = () => {
    try {
      setLoggedIn(false);

      setUsername("");
      setIsAdmin(false);

      localStorage.removeItem("loggedIn");
      localStorage.removeItem("username");
      localStorage.removeItem("isAdmin");

      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <Navbar
        loggedIn={loggedIn}
        username={username}
        isAdmin={isAdmin}
        onLogout={handleLogout}
      />
      <Mainbar loggedIn={loggedIn} />
      <ProductsContextComponent>
        <CartContextComponent>
          <FavoriteContextComponent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/products"
                element={<Products loggedIn={loggedIn} isAdmin={isAdmin} />}
              />
              <Route
                path="/products/:id"
                element={<ProductPage isAdmin={isAdmin} />}
              />
              <Route path="/about-us" element={<AboutUs />} />

              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route
                path="/sign-up"
                element={<SignUp onLogin={handleLogin} />}
              />
              <Route path="/custom-product" element={<CustomProduct />} />
              <Route path="/favorite-items" element={<FavoriteItems />} />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
              <Route path="/admin/add-product" element={<AddProduct />} />
              <Route path="/edit-product/:id" element={<EditProduct />} />
              <Route path="/delete-product/:id" element={<DeleteProduct />} />
              <Route path="/footer" element={<Footer />} />
              {/* <Route path="/product-page" element={<ProductPage />} /> */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </FavoriteContextComponent>
        </CartContextComponent>
      </ProductsContextComponent>
    </>
  );
}

export default App;
