import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='Navbar'>
        
    <p className='links'>Aries.Co.Ltd</p>

     <Link className='links' to="home"> <p>Home</p></Link>
     <Link className='links' to="product"><p>Products</p></Link>
     <Link className='links' to="about "><p>About </p></Link>
     <Link className='links' to="contact"><p>Contact Us</p></Link>
      </div>
    </div>
  )
}

export default Navbar
