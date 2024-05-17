import React, { useState, useEffect } from 'react';
import './homepage.css';
import {GoogleLogin} from '@react-oauth/google';
import Navbar from './Components/Navbar/navbar';
import slideimg1 from './assests/images/Designer.png';
import slideimg2 from './assests/images/buttermilk.png';
import slideimg3 from './assests/images/rasgula.png';
import slideimg4 from './assests/images/jamun.png';
import slideimg5 from './assests/images/ghee.jpeg';
import slideimg6 from './assests/images/paneer.png';
import slideimg7 from './assests/images/milkcake.jpeg';
import curdbased from './assests/images/curd.png';
import milkbased from './assests/images/milk.png';
import others from './assests/images/other.png';
import offer from './assests/images/download.png';

const Homepage = () => {
  const scrollToSection=(sectionId)=>{
    const section=document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({behavior:'smooth'});
    }
  }
    const images = [
      slideimg1,
      slideimg2,
      slideimg3,
      slideimg4,
      slideimg5,
      slideimg6,
      slideimg7
    ];
    const [userType, setUserType] = useState('Customer'); // Default userType
    const [formType, setFormType] = useState(null); // Default formType

    const handleToggle = (type) => {
        setUserType(type);
        setFormType(null); // Reset formType when toggling userType
    };

    const handleFormSelect = (type) => {
        setFormType(type);
    };

    const renderForm = () => {
        if (userType === 'Distributor') {
            if (formType === 'SignUp') {
                return (
                    <form>
                        <label htmlFor="username">Username:</label><br />
                        <input type="text" id="username" name="username" /><br />
                        <label htmlFor="phoneNumber">Phone Number:</label><br />
                        <input type="text" id="phoneNumber" name="phoneNumber" /><br />
                        <input type="submit" value="Submit" />
                    </form>
                );
            } else if (formType === 'Login') {
                return (
                    <form>
                        <label htmlFor="distributorId">Distr. ID:</label><br />
                        <input type="text" id="distributorId" name="distributorId" /><br />
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" id="password" name="password" /><br />
                        <input type="submit" value="Login" />
                    </form>
                );
            }
        } else if (userType === 'Customer') {
            if (formType === 'SignUp') {
                return (
                    <form>
                        <GoogleLogin 
                            onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                           }}
                          onError={() => {
                          console.log('Login Failed');
                        }}
                        useOneTap
                      />
                        
                    </form>
                );
            } else if (formType === 'Login') {
                return (
                    <form>
                        <label htmlFor="phoneNumber">Phone Number:</label><br />
                        <input type="text" id="phoneNumber" name="phoneNumber" /><br />
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" id="password" name="password" /><br />
                        <input type="submit" value="Login" />
                        <a href="#">New User? SignUp</a>
                    </form>
                );
            }
        }
    };
  
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
        <Navbar scrollToSection={scrollToSection}/>
        <div className='content'>
          <div className='content-below'>
            <h4>Quality Dairy Products</h4>
            <b><h1>Delivering Freshness To Your Doorstep</h1></b>
          </div>
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
  
        <div id='categories'class='categories'>
    <h3>Shop By Categories</h3>
    
    <div class="category">
        <img src={milkbased} alt="Category 1"/>
        <a href="#">Milk Products</a>
    </div>

    <div class="category">
        <img src={curdbased} alt="Category 2"/>
        <a href="#">Curd Products</a>
    </div>

    <div class="category">
        <img src={others} alt="Category 3"/>
        <a href="#">Other</a>
    </div>
</div>
<div className='additional-content'>
                <div className='login-form' style={{ backgroundImage: 'url(background-image.jpg)' }}>
                    <h3>Login In For?</h3>
                    <div>
                     <label className={`toggle ${userType === 'Distributor' ? 'active' : ''}`} onClick={() => handleToggle('Distributor')}>
                    <br/>
                    <h4 className='left-text'>Distributor</h4>
                    <span className="slider"></span>
                    </label>
                    <label id='login' className={`toggle ${userType === 'Customer' ? 'active' : ''}`} onClick={() => handleToggle('Customer')}>
                    <span className="slider"></span>
                    <br/>
                    <h4 className='right-text'>Customer</h4>
                    </label>
                    </div>
                    {userType && (
                        <div>
                            <h2 style={{marginLeft:'50px'}}>{userType}</h2>
                            
                            <label className={`toggle ${formType === 'SignUp' ? 'active' : ''}`} onClick={() => handleFormSelect('SignUp')}>
                            <br/>
                            <h4 className='left-text'>SignUp</h4>
                            <span className="slider"></span>
                            </label>
                           
                            <label className={`toggle ${formType === 'Login' ? 'active' : ''}`} onClick={() => handleFormSelect('Login')}>
                            <span className="slider"></span>
                            <br/>
                            <h4 className='right-text'>Login</h4>
                            </label>
                            
                            {renderForm()}
                        </div>
                    )}
                </div>
            </div>
            <div id='about'className='about'>
              <h1>About Us</h1>
              <p style={{textAlign:'justify'}}>Supra's MilkMan is a trusted name in the dairy industry. We offer a wide range of premium quality dairy products including curd, ghee, butter, lassi, buttermilk, paneer, and rasgulla. Our products are made from the purest ingredients and are delivered fresh to your doorstep. Since our inception in Samastipur, Bihar, we have expanded our reach to Pune, India, and are committed to growing further. Our dedicated team of professionals works tirelessly to ensure that our customers receive the best quality products and services at a fair and competitive price. Contact us to learn more.</p>
              <button style={{padding:'15px',width:'150px',fontWeight:'bold',color:'white',background:'orange',border:'0',borderRadius:'5px'}}>Learn More</button>
            </div>
            <div id='footer' className='footer'>
              <footer >
                {/* Footer with company address and contact */}
                <p>Samastipur, Bihar 848101, <br></br>India</p>
                <p>Contact: +91 9876543210 suprasmilkman@gmail.com</p>
              </footer>
            </div>
        </div>    
      </div>
    );
  };
  
  export default Homepage;
