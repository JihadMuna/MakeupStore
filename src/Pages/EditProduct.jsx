import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles/EditProduct.module.css';
import { ColorRing } from 'react-loader-spinner'


function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState(null);

  const url = `https://657a01ea1acd268f9afa8fc8.mockapi.io/products/${id}`;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(url);
        setProduct(response.data);
        // Set the initial state for editing
        setEditedProduct({ ...response.data });
      } catch (error) {
        console.error('Error fetching product:', error.message);
      }
    };

    fetchProduct();
  }, [url]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSaveChanges = () => {
    // Display confirmation alert
    const confirmSave = window.confirm('Do you want to save changes?');

    if (confirmSave) {
      axios.put(url, editedProduct)
        .then(() => {
          alert('Changes saved successfully!');
          // Navigate back to the products page
          navigate('/products');
        })
        .catch((error) => {
          console.error('Error saving changes:', error.message);
        });
    }
  };

  return (
    <div className={styles.editpage}>
    <div className={styles.editcontainer}>
      <h2>Edit Product</h2>
      {editedProduct ? (
        <div>
          <label>
            Product Category:
            <input
              type="text"
              name="category"
              value={editedProduct.category}
              onChange={handleInputChange}
            />
          </label> <br />
          <label>
            Product Type:
            <input
              type="text"
              name="type"
              value={editedProduct.type}
              onChange={handleInputChange}
            />
          </label>  <br />
          <label>
            Product Name:
            <input
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleInputChange}
            />
          </label>  <br />
          <label>
            Product Color:
            <input
              type="text"
              name="color"
              value={editedProduct.color}
              onChange={handleInputChange}
            />
          </label>  <br />
          <label>
            Product Image:
            <input
              type="text"
              name="image"
              value={editedProduct.image}
              onChange={handleInputChange}
            />
          </label>  <br />
          <label>
            Product Volume:
            <input
              type="text"
              name="volume"
              value={editedProduct.volume}
              onChange={handleInputChange}
            />
          </label>  <br />
          <label>
            Product Description:
            <input
              type="text"
              name="description"
              value={editedProduct.description}
              onChange={handleInputChange}
            />
          </label>  <br />
          <label>
            Product Ingredients:
            <input
              type="text"
              name="ingredients"
              value={editedProduct.ingredients}
              onChange={handleInputChange}
            />
          </label>  <br />
         
          <button onClick={handleSaveChanges}>Save Changes</button>
        </div>
      ) : (
        <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
      )}
    </div>
    </div>
  );
}

export default EditProduct;