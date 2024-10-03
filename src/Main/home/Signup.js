import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Signup = ({ setView }) => {
    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        mobileno: '',
        emailid: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        const result = await response.text();
        alert(result);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <br /><br /><br /><br /><br />
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} required />
                <input type="text" name="mobileno" placeholder="Mobile No" onChange={handleChange} required />
                <input type="email" name="emailid" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button className='login-button' type="submit">Signup</button>
                <p>Already have an account? <Link to="/login" style={{ color: 'blue' }}>Login</Link></p> {/* Use Link for navigation */}
            </form>
        </div>
    );
};

export default Signup;
