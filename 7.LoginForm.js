import React, { useState } from 'react';

const LoginForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // State to manage error messages
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleLogin = () => {
    // Sample username and password for validation
    const validUsername = 'user';
    const validPassword = 'password';

    // Check if entered username and password are valid
    if (formData.username === validUsername && formData.password === validPassword) {
      setErrorMessage('');
      alert('Login successful!'); // Replace this with your logic for a successful login
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
