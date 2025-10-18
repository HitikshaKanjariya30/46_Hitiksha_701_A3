import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [form, setForm] = useState({});
    const [message, setMessage] = useState('');
    const [msgType, setMsgType] = useState('');
    const navigate = useNavigate();

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setMessage('');
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('/auth/login', form);
            
           if (res.data.token || res.data.authToken) {
            const token = res.data.token || res.data.authToken;
            localStorage.setItem('token', token);
            setMsgType('success');
            setMessage('Login successful! Redirecting...');
            setTimeout(() => navigate('/profile'), 1000);
            } else {
                setMsgType('error');
                setMessage('Login failed — no token received.');
            }

        } catch (err) {
            setMsgType('error');
            setMessage('Invalid email or password.');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={handleChange}
                    required
                />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Login</button>
            </form>

            {message && (
                <p style={{ color: msgType === 'error' ? 'red' : 'green', marginTop: '10px' }}>
                    {message}
                </p>
            )}

            <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
    );
}
