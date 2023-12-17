import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsContextComponent = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://657a01ea1acd268f9afa8fc8.mockapi.io/products"
      );

      setProducts(response.data);
    };

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
  );
};

export default ProductsContextComponent;
