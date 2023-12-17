import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles/login.module.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    identifier: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your login API endpoint using Axios
      const response = await axios.post('YOUR_LOGIN_API_ENDPOINT', loginData);

      console.log('Login successful!', response.data);
      // You can redirect to the user's dashboard or perform any other actions here
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle error, e.g., show an alert
    }
  };

  return (
    <div className={styles.container}>
    <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username or Email:
          <input type="text" name="identifier" value={loginData.identifier} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={loginData.password} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
