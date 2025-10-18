import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import Navbar from '../components/Navbar';

export default function Profile() {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        axios.get('/auth/profile')
            .then(res => setProfile(res.data))
            .catch(() => alert("Failed to load profile"));
    }, []);

    return (
        <div className="container">
            <Navbar />
            <h2>Profile</h2>
            <p><b>Name:</b> {profile.name}</p>
            <p><b>Email:</b> {profile.email}</p>
            <p><b>Department:</b> {profile.department}</p>
            <p><b>Salary:</b> {profile.basicSalary}</p>
        </div>
    );
}
