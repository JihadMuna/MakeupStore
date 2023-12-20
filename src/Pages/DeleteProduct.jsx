import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const url = `https://657a01ea1acd268f9afa8fc8.mockapi.io/products/${id}`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(url);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error.message);
      }
    };

    fetchProduct();
  }, [url]);

  const handleDeleteProduct = () => {
    // Display confirmation alert
    const confirmDelete = window.confirm('Do you want to delete this product?');

    if (confirmDelete) {
      // Perform delete product logic (e.g., make an API request)
      axios.delete(url)
        .then(() => {
          alert('Product deleted successfully!');
          // Navigate back to the products page
          navigate('/products');
        })
        .catch((error) => {
          console.error('Error deleting product:', error.message);
        });
    }
  };

  return (
    <div className={styles.container}>
      <h1>Delete Product</h1>
      {product ? (
        <div>
          <span>{product.name}</span>
          <p>Are you sure you want to delete this product?</p>
          <button onClick={handleDeleteProduct}>Delete</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DeleteProduct;