
import React, { useState } from 'react';
// import { login } from '../Authentication/Auth';
import { login } from '../../components/Authentication/Auth';
import { Link } from 'react-router-dom'


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login({ username, password });
        } catch (error) { 
        }
    };

    return (
        <form onSubmit={handleLogin}>
            
            {/* Input fields for username and password */}
            
            <div className='login'>
          </div>
          
            <h1>LOGIN</h1>

              <input
                type="text"
                placeholder='email'
                className='email'

              />

              <input
                type="password"
                placeholder='password'
                className='password'
               
              />
               <div className="sign-in"> 
               <Link to='/'>
              <button type="submit" className="login">LOGIN</button>
              </Link>
              </div>
        
         
        
   
        </form>
    );
};


export default Login;

