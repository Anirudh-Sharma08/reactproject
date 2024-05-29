import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div>
        <div className='Navbar'>
        <img id='image' src='https://thumbs.dreamstime.com/b/basic-rgb-186809368.jpg'alt='Logo'/>
        
       
     <Link className='links' to="home"> <p>Home</p></Link>
     <Link className='links' to="product"><p>Products</p></Link>
     
     <Link className='links' to="about "><p>About </p></Link>
     <Link className='links' to="contact"><p>Contact Us</p></Link>
     <div className='search'>
        <input className='searchbar' type="text" placeholder="Search Here.."/>
        <div className='icon'>
        < FaSearch/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
