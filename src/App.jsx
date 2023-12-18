import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ErrorPage from './Pages/ErrorPage'; 
import Products from './Pages/Products'
import CustomProduct from './Pages/CustomProduct'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import SignUp from './Pages/SignUp'
import ProductsContextComponent from './context/ProductsContextComponent'
import Mainbar from './Components/Mainbar/Mainbar'
import FaceMakeup from './Pages/FaceMakeup';
import EyeMakeup from './Pages/EyeMakeup';
import LipMakeup from './Pages/LipMakeup';
import SkinCare from './Pages/SkinCare';
import SearchItem from './Pages/SearchItem';
import FavoriteItems from "./Pages/FavoriteItems";
import ShoppingCart from './Pages/ShoppingCart';

function App() {
  const [isError, setIsError] = useState(false);

  return (
    <>
      <BrowserRouter>
        <ProductsContextComponent>
          {isError ? (
            <Routes>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          ) : (
            <>
              <Navbar />
              <Mainbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/custom" element={<CustomProduct />} />
                <Route path="/face-makeup" element={<FaceMakeup />} />
                <Route path="/eye-makeup" element={<EyeMakeup />} />
                <Route path="/lip-makeup" element={<LipMakeup />} />
                <Route path="/skin-care" element={<SkinCare />} />
                <Route path="/search-item" element={<SearchItem />} />
                <Route path="/favorite-items" element={<FavoriteItems />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
              </Routes>
            </>
          )}
        </ProductsContextComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
