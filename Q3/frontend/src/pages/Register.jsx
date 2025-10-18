import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
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
            await axios.post('/auth/register', form);
            setMsgType('success');
            setMessage('Registered successfully! Redirecting to login...');
            setTimeout(() => navigate('/login'), 1500);
        } catch (err) {
            setMsgType('error');
            setMessage('Error during registration. Please try again.');
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} required />
                <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
                <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
                <input name="department" placeholder="Department" onChange={handleChange} />
                <input name="basicSalary" placeholder="Salary" type="number" onChange={handleChange} />
                <button type="submit">Register</button>
            </form>

            {message && (
                <p style={{ color: msgType === 'error' ? 'red' : 'green', marginTop: '10px' }}>
                    {message}
                </p>
            )}
        </div>
    );
}
