import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './email.css';

const EmailLogin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch('http://localhost:8000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const user = await response.json();

      if (response.ok) {
        // setIsLoggedIn(true);
        props.setUserLoggedIn(true);
        props.setLoggedUser(user)
        // alert('Login successful!', response)
        setTimeout(() => {
          navigate('/');
        }, 2000);
        
      } else {
        const errorData = await response.json();
        console.log('Registration error:', errorData);
      }

    } catch (error) {
      // Handle login error
      console.log(error);
    }
  };

  return (
    <div className="email-login-container">
      <div className="email-login-box">
        <h2 className="email-login-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="email-login-form-group">
            <label className="email-login-label">Email:</label>
            <input className="email-login-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="email-login-form-group">
            <label className="email-login-label">Password:</label>
            <input className="email-login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="email-login-button" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default EmailLogin;
