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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy login handling
        if (loginData.username && loginData.password) {
            if (loginData.role === 'user') {
                navigate('/user/dashboard'); // Redirect to user dashboard
            } else {
                navigate('/admin/dashboard'); // Redirect to admin dashboard if admin login
            }
        } else {
            alert("Invalid credentials");
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
