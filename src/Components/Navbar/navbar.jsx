import React from 'react'
import './navbar.css';
import logo from '../../assests/images/logo.png';
import searchlogo from '../../assests/images/search-b.png';

const navbar = () => {
  return (
    <div className='navBar'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>About Us</li>
            <li>Our Products</li>
            <li>Login</li>
            <li>Contact Us</li>
        </ul>
        <div className='searchbox'>
            <input type='text' placeholder='search'/>
            <img src={searchlogo} alt=''/>
        </div>
    </div>
  )
}

export default navbar
