import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Admin and Employee Portal</h1>
            <p>This is the homepage where users can navigate to different sections of the application.</p>
            <h2>Quick Links</h2>
            <ul>
                <li><Link to="/admin">Admin Dashboard</Link></li>
                <li><Link to="/employee">Employee Dashboard</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    );
};

export default HomePage;
