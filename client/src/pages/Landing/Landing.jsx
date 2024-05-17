import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
  return (
    <div>
       <div className='box'>
          <h1 className='heading'>WELCOME TO MOOD BUD</h1>
          <button className='form-button'><Link to="/home">Proceed to Homepage</Link></button>
          </div>
    </div>
  )
}

export default Landing
