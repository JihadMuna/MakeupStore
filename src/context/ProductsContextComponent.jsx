import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

const ProductsContextComponent = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://657a01ea1acd268f9afa8fc8.mockapi.io/products"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      // Make the API call to delete the product
      await axios.delete(
        `https://657a01ea1acd268f9afa8fc8.mockapi.io/products/${productId}`
      );

      // Update the state by filtering out the deleted product
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  return (
    <ProductsContext.Provider value={{ products, deleteProduct, fetchData }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextComponent;
