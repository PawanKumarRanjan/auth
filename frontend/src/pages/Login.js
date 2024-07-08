import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import AuthForm from '../components/LoginAuthForm';


const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = async (formData) => {
        try {
            const response = await login(formData);
            if (response && response.data && response.data.jwtToken) {
                localStorage.setItem('token', response.data.jwtToken);
                localStorage.setItem('user', JSON.stringify({ name: response.data.name }));
                navigate('/dashboard');
            } else {
                console.error('Invalid response:', response);
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error('Login Error:', error.response?.data?.message || error.message);
            setError('Invalid email or password');
        }
    };

    const closePopup = () => {
        setError('');
    };

    return (
        <div className='box'>
            <span className='borderLine'></span>
            <AuthForm onSubmit={handleLogin} formType="login" />
            {error && (
                <div className="error-popup">
                    <p>{error}</p>
                    <button onClick={closePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Login;
