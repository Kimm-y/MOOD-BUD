import React, { useState } from 'react';
import { login } from '../../components/Authentication/Auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ username, password });
            if (response) {
               
                navigate('/home');
            }
        } catch (error) {
            console.error('Login failed:', error);
         
        }
    };

    return (
        <form onSubmit={handleLogin} className='  w-75 p-3 h-75 d-inline-block shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10 position-absolute top-50 start-50 translate-middle'
         >
            <div className='login'>
            </div>
            <h1>LOGIN</h1>
            <input
                type="text"
                placeholder='email'
                className='email form-control mt-5'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder='password'
                className='password form-control  mt-5'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div className="sign-in mt-5"> 
                <button type="submit" className="login btn btn-primary column-gap-3">LOGIN</button>
                <Link to = '/register'>
                <button type="submit" className="login btn btn-primary">REGISTER</button></Link>
            </div>
        </form>
    );
};

export default Login;
