import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './styles/AddProduct.module.css';

function AddProduct() {
  const navigate = useNavigate(); // Create a navigate function

  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState('');
  const [volume, setVolume] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [price, setPrice] = useState('');

  const url = 'https://657a01ea1acd268f9afa8fc8.mockapi.io/products';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const addProduct = {
        category,
        type,
        name,
        color,
        image,
        volume: parseInt(volume),
        description,
        ingredients,
        price: parseFloat(price),
      };

      const response = await axios.post(url, addProduct);

      console.log('Product added successfully:', response.data);

      const shouldAddAnotherProduct = window.confirm(
        'Product added successfully. Do you want to add another product?'
      );
      if (shouldAddAnotherProduct) {
        // Clear the form or perform any other actions to add another product
        setCategory('');
        setType('');
        setName('');
        setColor('');
        setImage('');
        setVolume('');
        setDescription('');
        setIngredients('');
        setPrice('');
      } else {
        navigate('/products'); // Use navigate to go back to the products page
      }
    } catch (error) {
      console.error('Error on adding product:', error.message);
    }
  };

  return (
    <div className={styles.container}>
    <form onSubmit={handleSubmit}>
      
        <input 
        placeholder='  Category'
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} required />
     
        <input
           placeholder='   Type'
            type="text" value={type} onChange={(e) => setType(e.target.value)} required />
       
        <input 
           placeholder=' Name'
           type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        
        <input 
           placeholder='Color'
           type="text" value={color} onChange={(e) => setColor(e.target.value)} required />
      
        <input 
           placeholder='  Image URL'
           type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
       
        <input 
           placeholder=' Volume'
           type="text" value={volume} onChange={(e) => setVolume(e.target.value)} required />
       
        <input 
           placeholder=' Description'
           type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
       
        <input 
           placeholder=' Ingredients'
           type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        
        <input 
           placeholder='Price'
           type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <button type="submit">Add Product</button>
    </form>
  </div>
);
}

export default AddProduct;
