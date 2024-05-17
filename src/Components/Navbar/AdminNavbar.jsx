import React from 'react';
import './adminnavbar.css';
import home from '../../assests/images/cow.png';
import logout from '../../assests/images/exit.png';
import logo from '../../assests/images/logo.png';

const AdminNavbar = ({ setPage, setShowLogoutDialog }) => {
  const handleDropdownClick = (page) => {
    setPage(page);
  };

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  return (
    <div className="admin-navbar">
      <img src={logo} alt='logo'/>
      <div className="home-button" onClick={() => setPage('home')}>
        <img src={home} alt="Home" />
        <span>Home</span>
      </div>
      <div className="add-new-button">
        <button>Add New</button>
        <div className="dropdown-content">
          <span onClick={() => handleDropdownClick('products')}>Products</span>
          <span onClick={() => handleDropdownClick('distributors')}>Distributors</span>
          <span onClick={() => handleDropdownClick('offers')}>Offers</span>
        </div>
      </div>
      <div className="view-edit-button">
        <button>View & Edit</button>
        <div className="dropdown-content">
          <span onClick={() => handleDropdownClick('products')}>Products</span>
          <span onClick={() => handleDropdownClick('distributors')}>Distributors</span>
          <span onClick={() => handleDropdownClick('offers')}>Offers</span>
          <span onClick={() => handleDropdownClick('orders')}>Orders</span>
        </div>
      </div>
      <button className="edit-profile-button" onClick={() => setPage('edit-profile')}>
        Edit Profile
      </button>
      <div className="logout-button" onClick={handleLogout}>
        <img src={logout} alt="Logout" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default AdminNavbar;