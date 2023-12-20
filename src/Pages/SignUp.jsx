// SignUp.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles/SignUp.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUp = ({ onLogin }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error('Password and Confirm Password must match');
      // Display an error message to the user
      // You can handle this error in a more user-friendly way, e.g., by displaying a message on the page
      return;
    }
    
    try {
      // Make a POST request to your API endpoint
      const response = await axios.post('https://657a01ea1acd268f9afa8fc8.mockapi.io/users', formData);
      
      console.log('User successfully created!', response.data);
      
      // Call the onLogin function and pass the user data
      onLogin(response.data);
      
      // Use the navigate function to go to the home page
      navigate('/');
    } catch (error) {
      console.error('Error creating user:', error.message);
      // Handle error, e.g., show an alert
    }
  };

  return (
    <div className={styles.signupcontainer}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
          <input
          placeholder='Username'
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        <br />
          <input
          placeholder='Email'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        <br />
          <input
          placeholder='Password'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        <br />
          <input
          placeholder='Confirm Password'
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <div className={styles.linkcontainer}>
        <p>
          Already have an account?{' '}
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
