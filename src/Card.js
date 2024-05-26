import React from 'react'
import './App.css'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
const card = () => {
  return (
    <div className='heading'>
       <h1><b>HEY! Anirudh Sharma ,How are you.. </b></h1>
   
    <div className='parent'>

   
    <div className ='cardbox'>
        <FaTwitter size={32}/>
      <h1>TWITTER</h1>
      
      <p className='content'>
      Twitter is a widely-used social media platform that allows users to post and interact with messages known as "tweets." Here are some key points about Twitter:
      </p>
      <button className='btn'>READ More</button>

    </div>
    
    <div className ='cardbox'>
        <FaInstagram size={32}/>
      <h1>INSTAGRAM</h1>
      
      <p className='content'>
      Instagram is a widely-used social media platform that allows users to post and interact with messages known as "tweets." Here are some key points about Twitter:
      </p>
      <button className='btn'>READ More</button>

    </div>
    
    <div className ='cardbox'>
        <FaFacebook size={32}/>
      <h1>FACEBOOK</h1>
      
      <p className='content'>
      Facebook   is a widely-used social media platform that allows users to post and interact with messages known as "tweets." Here are some key points about Twitter:
      </p>
      <button className='btn'>READ More</button>

    </div>
    </div>
    </div>
  )
}

export default card
