import React, { useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate } from 'react-router-dom';
import styles from './styles/Login.module.css';


const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    identifier: '', // Assuming you use 'identifier' for login
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fetch the user data from the mock API
      const response = await axios.get('https://657a01ea1acd268f9afa8fc8.mockapi.io/users');

      // Check if the entered credentials match any user in the response
      const user = response.data.find(
        (u) => u.email === loginData.identifier && u.password === loginData.password
      );

      if (user) {
        console.log('Login successful!', user);
        onLogin(user);
        navigate('/');
      } else {
        console.error('Invalid credentials');
        // Handle invalid credentials, e.g., show an alert
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle error, e.g., show an alert
    }
  };

  return (
    <div className={styles.maincont}>
    <div className={styles.logincontainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username or Email" type="text" name="identifier" value={loginData.identifier} onChange={handleChange} required />
        <br />
          <input placeholder="Password" type="password" name="password" value={loginData.password} onChange={handleChange} required />
        <br />
        <button type="submit">Login</button>
      </form>
      <div className={styles.linkcontainer}>
        <p>
          Dont have an account?{' '}
          <Link to="/sign-up" className={styles.link}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
