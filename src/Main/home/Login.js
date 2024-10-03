import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
        role: 'user', // Default role
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8080/${loginData.role}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: loginData.username, password: loginData.password }),
        });
        if (response.ok) {
            if (loginData.role === 'user') {
                navigate('/user/dashboard'); // Redirect to user dashboard
            } else {
                navigate('/admin/dashboard'); // Redirect to admin dashboard if admin login
            }
        } else {
            const result = await response.text();
            alert(result);
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <br/> <br/> <br/> <br/> <br/> <br/>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
                <select 
                    name="role" 
                    onChange={handleChange} 
                    value={loginData.role} 
                    required 
                    style={{ marginBottom: '20px' }}
                    className="role-select" // Apply the class here
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button className="login-button" type="submit">Login</button>
                <p>Don't have an account? <Link to="/signup" style={{ color: 'blue' }}>Signup</Link></p>
            </form>
        </div>
    );
};

export default Login;
