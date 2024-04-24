import React, { useState, useEffect } from 'react';
import './homepage.css';
import Navbar from './Components/Navbar/navbar';
import slideimg1 from './assests/images/Designer.png';
import slideimg2 from './assests/images/buttermilk.png';
import slideimg3 from './assests/images/rasgula.png';
import slideimg4 from './assests/images/jamun.png';
import slideimg5 from './assests/images/ghee.jpeg';
import slideimg6 from './assests/images/paneer.png';
import slideimg7 from './assests/images/milkcake.jpeg';
import offer from './assests/images/download.png';
const Homepage = () => {
    const images = [
      slideimg1,
      slideimg2,
      slideimg3,
      slideimg4,
      slideimg5,
      slideimg6,
      slideimg7
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        // Calculate the next slide index
        const nextSlide = (currentSlide + 1) % images.length;
        setCurrentSlide(nextSlide);
      }, 3000); // Change slide every 3 seconds
  
      return () => clearInterval(intervalId); // Cleanup on unmount
    }, [currentSlide, images.length]);
  
    return (
      <div className='container'>
        <Navbar />
        <div className='content'>
          <div className='slider'>
            {/* Render each image as a slide within the slider */}
            <div className='slides-container' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className='slide'>
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
  
          <div className='offer'>
          {/* Image button with offer */}
          <div className='offer-image-container'>
            <img src={offer} alt='Offer' className='offer-image' />
            <div className='offer-overlay'>
              <p className='offer-text'>50% Off</p>
              <button className='shop-button'>Shop Now</button>
            </div>
          </div>
        </div>
  
          <div className='categories'>
            {/* Circular image buttons */}
            {/* Add your circular image buttons here */}
          </div>
  
          <div className='additional-content'>
            {/* Paragraph space for additional content */}
            <p>Write your additional content here...</p>
          </div>
        </div>
  
        <footer className='footer'>
          {/* Footer with company address and contact */}
          <p>Company Address: 123 Main St, City, Country</p>
          <p>Contact Number: +1 234 567 890</p>
        </footer>
      </div>
    );
  };
  
  export default Homepage;
