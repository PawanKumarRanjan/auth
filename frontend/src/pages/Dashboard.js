import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.name) {
            setUserName(user.name);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        window.location.href = '/login';
    };

    return (
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <p>Welcome, <span>{userName}!</span></p>
            <button onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                </svg>
                <div class="dashboard-text">
                    Logout
                </div>
            </button>
        </div>
    );
};

export default Dashboard;
