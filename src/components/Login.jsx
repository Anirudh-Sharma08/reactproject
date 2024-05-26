import React from 'react'
import './Login.css'
const Login = () => {
  return (
   
    <div>
      
        <div className='Login'>

        <img
          id="Photo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrxPSJI-uVlJtW6uLDwKFu13Ys9rqfpjo_w&s"
          alt="Login Photo"
        />
          <input type="text" id="username" placeholder=' Enter Email ID ' name="username" />
          <input type="password" id="username" placeholder='Enter password' name="password"/>
          <input type="password" id="username" placeholder='Confirm password' name="password"/>
         <button className='btn'>Submit Data</button>
       </div>
    </div>
  )
}

export default Login
