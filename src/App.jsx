import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AdminHomePage from './AdminHomePage';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <GoogleOAuthProvider clientId='your-google-oauth-client-id'>
      <BrowserRouter>
        <div className="App">
          {loading ? (
            <BarLoader
              color="#02c8ff"
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            <AdminHomePage />
          )}
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
