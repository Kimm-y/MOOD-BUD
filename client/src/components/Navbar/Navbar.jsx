import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import image1 from '../../assets/Images/image1.jpg'


const imagesList = [
  {
    id: 1,
    src: image1,
    alt: "Image 1",
  },
  // {
  //   id: 2,
  //   src: image2,
  //   alt: "Image 2",
  // },
  // {
  //   id: 3,
  //   src: image3,
  //   alt: "Image 3",
  // },
];

const Navbar = () => {
  return (

    <>

<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    {imagesList.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} width="30" height="24" class="d-inline-block align-text-top"/>
      ))}
      MOOD BUD
    </a>
   <Link to = '/articles'> <button class="btn btn-outline-primary" type="submit">ARTICLES</button></Link>
    <Link to= '/myentries'> <button class="btn btn-outline-primary" type="submit">MY ENTRIES</button></Link>
    <Link to='/form'><button class="btn btn-outline-primary" type="submit">DAILY CHECK-UP</button></Link>

  </div>
</nav>

</>

  )
}

export default Navbar



// bg-body-tertiary