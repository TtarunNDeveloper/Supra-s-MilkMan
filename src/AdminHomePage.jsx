import React, { useState } from 'react';
import './adminhomepage.css';
import AdminNavbar from './Components/Navbar/AdminNavbar';

const AdminHomePage = () => {
  const [page, setPage] = useState('home');
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <div className="content">Welcome to the Home Page</div>;
      case 'products':
        return <div className="content">Welcome to the Products Page</div>;
      case 'distributors':
        return <div className="content">Welcome to the Distributors Page</div>;
      case 'offers':
        return <div className="content">Welcome to the Offers Page</div>;
      case 'orders':
        return <div className="content">Welcome to the Orders Page</div>;
      case 'edit-profile':
        return <div className="content">Welcome to the Edit Profile Page</div>;
      default:
        return <div className="content">Welcome to the Home Page</div>;
    }
  };

  const handleCancelLogout = () => {
    setShowLogoutDialog(false);
  };

  const handleConfirmLogout = () => {
    setPage('logout');
  };

  return (
    <div className="admin-home-page">
      <AdminNavbar setPage={setPage} setShowLogoutDialog={setShowLogoutDialog} />
      <div className="background-image">
        <h1>Welcome Admin</h1>
        <img src="" alt="Logo" className="logo" />
      </div>
      <div className="content-container">
        {renderPage()}
      </div>
      {showLogoutDialog && (
        <div className="logout-dialog-background">
          <div className="logout-dialog">
            <h2>Logout Warning</h2>
            <p>Are you sure you want to logout?</p>
            <div className="logout-dialog-buttons">
              <button className="cancel-button" onClick={handleCancelLogout}>Cancel</button>
              <button className="confirm-button" onClick={handleConfirmLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHomePage;
