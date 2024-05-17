import React from 'react'
import './navbar.css';
import logo from '../../assests/images/logo.png';
import searchlogo from '../../assests/images/search-b.png';

const navbar = ({scrollToSection}) => {
  return (
    <div className='navBar'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li onClick={()=>scrollToSection('about')}>About Us</li>
            <li onClick={()=>scrollToSection('categories')}>Our Products</li>
            <li onClick={()=>scrollToSection('login')}>Login</li>
            <li onClick={()=>scrollToSection('footer')}>Contact Us</li>
        </ul>
        <div className='searchbox'>
            <input type='text' placeholder='search'/>
            <img src={searchlogo} alt=''/>
        </div>
    </div>
  )
}

export default navbar
