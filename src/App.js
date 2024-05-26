import React from 'react'
import './App.css'
import './Nav.css'
import Card from './Card'
import Navbar from './Navbar'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Products from './components/Products'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    
     <BrowserRouter>
     <Navbar/>
     
     
     
    
     <Routes>
    
    <Route path="/product" element={<Products/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/contact" element={<Contact/>}/>



    


     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App

