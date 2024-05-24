import React from 'react'

function Register() {
  return (
    <div>
       <form className='  w-75 p-3 h-75 d-inline-block shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10 position-absolute top-50 start-50 translate-middle'
         >
            <div className='login'>
            </div>
            <h1>REGISTER</h1>
            <input
                type="text"
                placeholder='email'
                className='email form-control mt-5'
              
             
            />
            <input
                type="password"
                placeholder='password'
                className='password form-control  mt-5'
        
            
            />
            <div className="sign-in mt-5"> 
               
                <button type="submit" className="register btn btn-primary">REGISTER</button>
            </div>
        </form>
    </div>
  )
}

export default Register
