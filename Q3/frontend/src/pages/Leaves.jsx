import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import Navbar from '../components/Navbar';

export default function Leaves() {
    const [leaves, setLeaves] = useState([]);
    const [form, setForm] = useState({ date: '', reason: '' });
    const [message, setMessage] = useState('');
    const [msgType, setMsgType] = useState('');

    useEffect(() => {
        fetchLeaves();
    }, []);

    const fetchLeaves = async () => {
        try {
            const res = await axios.get('/leave/list');
            setLeaves(res.data);
        } catch (err) {
            setMsgType('error');
            setMessage('Error loading leaves.');
        }
    };

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setMessage('');
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/leave/add', form);
            setMsgType('success');
            setMessage('Leave added successfully.');
            setForm({ date: '', reason: '' });
            fetchLeaves();
        } catch (err) {
            setMsgType('error');
            setMessage('Error adding leave.');
        }
    };

    return (
        <div className="container">
            <Navbar />
            <h2>Apply Leave</h2>
            <form onSubmit={handleSubmit}>
                <input type="date" name="date" value={form.date} onChange={handleChange} required />
                <input type="text" name="reason" placeholder="Reason" value={form.reason} onChange={handleChange} required />
                <button type="submit">Add Leave</button>
            </form>

            {message && (
                <p style={{ color: msgType === 'error' ? 'red' : 'green', marginTop: '10px' }}>
                    {message}
                </p>
            )}

            <h3>Your Leaves</h3>
            <ul>
                {leaves.map(l => (
                    <li key={l._id}>
                        {new Date(l.date).toLocaleDateString()} - {l.reason} - {l.grant}
                    </li>
                ))}
            </ul>
        </div>
    );
}
