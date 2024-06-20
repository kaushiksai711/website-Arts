
import './styles.css';
import React, { useState } from 'react';
import axios from 'axios';
import {link, useNavigate } from 'react-router-dom'

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    History=useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            if (response.data.success) {
                alert('Login successful');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Error logging in. Please try again later.');
        }
    };

  return (
    <main>
        <div className="container" id="A">
          <div>
            <h2 className="l1"><a href="/login">Login</a></h2>
            <h2 className="l2"><a href="/signup">Signup</a></h2>
          </div>
          <div className="login">
            <form onSubmit={handleSubmit}>
                <p>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" required />
                </p>
                <p>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
                </p>
                <input type="submit" value="Login" />
            </form>
        </div>
        </div>
    </main>
  );
}

export default LoginForm;
