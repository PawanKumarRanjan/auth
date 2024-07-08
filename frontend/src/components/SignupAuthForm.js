import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthForm = ({ onSubmit, formType }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Signup</h2>
            <div className='inputBox'> 
                <input type="name" name="name" value={formData.name} onChange={handleChange} required />
                <span>Name</span>
                <i></i>
            </div>
            <div className='inputBox'> 
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                <span>Email</span>
                <i></i>
            </div>
            <div className='inputBox'>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                <span>Password</span>
                <i></i>
            </div>
            <div className='button-element'>
            <button type="submit">{formType === 'signup' ? 'Signup' : 'Login'}</button>
            </div>
            <div className='links'>
                {formType === 'login' ? (
                    <p>
                        New User? <Link to='/signup'>Signup</Link>
                    </p>
                ) : (
                    <p>
                        Already registered? <Link to='/login'>Login</Link>
                    </p>
                )}
            </div>
        </form>
    );
};

export default AuthForm;
