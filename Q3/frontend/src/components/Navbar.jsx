import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav style={{ marginBottom: '20px', backgroundColor: '#f0f0f0', padding: '10px' }}>
            <Link to="/profile">Profile</Link> |{" "}
            <Link to="/leaves">Leaves</Link> |{" "}
            <button onClick={logout} style={{ marginLeft: '10px' }}>Logout</button>
        </nav>
    );
}
