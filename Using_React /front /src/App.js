// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './navbar';
import Home from './Home';
import AboutUs from './About';
import LoginForm from './LoginSignup';
import Buy from './Buy';
import Sell from './Sell';
import Contact from './Contact';
import Signup1 from './Signup'
import Admin from './Arts'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
        <Route exact path="/" element={<Home/>} />
        <Route path='/admin' element={<Admin/>}  />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/sell" element={<Sell/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup1/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
