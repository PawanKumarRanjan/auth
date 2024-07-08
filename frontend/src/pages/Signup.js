import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';
import AuthForm from '../components/SignupAuthForm';

const Signup = () => {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    const handleSignup = async (formData) => {
        try {
            const response = await signup(formData);
            if (response && response.data && response.data.success) {
                setShowPopup(true);
            } else {
                console.error('Invalid response:', response);
            }
        } catch (error) {
            console.error('Signup Error:', error.response?.data?.message || error.message);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        navigate('/login');
    };

    return (
        <div className='box'>
            <span className='borderLine'></span>
            <AuthForm onSubmit={handleSignup} formType="signup" />
            {showPopup && (
                <div className="success-popup">
                    <p>Signup successful! Please login.</p>
                    <button onClick={closePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Signup;
