import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles/SignUp.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '', // New field for confirm password
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      console.error('Password and Confirm Password must match');
      // You can show an alert or handle the error appropriately
      return;
    }

    try {
      // Make a POST request to your API endpoint
      const response = await axios.post('https://657a01ea1acd268f9afa8fc8.mockapi.io/users', formData);

      console.log('User successfully created!', response.data);
      // You can redirect to the login page or perform any other actions here
    } catch (error) {
      console.error('Error creating user:', error.message);
      // Handle error, e.g., show an alert
    }
  };

  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username :
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email :
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password :
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Confirm Password :
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
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
