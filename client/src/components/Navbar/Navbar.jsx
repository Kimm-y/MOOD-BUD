import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
    <a class="navbar-brand">MOOD BUD</a>
    <form className="container-tertiary">
  
    <button className="btn btn-outline" type="button">MY ENTRIES</button>
    <Link to = '/form'> <button className="btn btn-outline" type="button">DAILY CHECK-UP</button></Link>
   
   
  </form>
</nav>
      
    </div>
  )
}

export default Navbar



// bg-body-tertiary