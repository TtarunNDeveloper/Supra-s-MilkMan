import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom';
import Homepage from './homepage';
import { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';

function App() {
  const [loading, setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])
  return (
    <BrowserRouter>
    <div className="App">
      {
        loading ?(
        <BarLoader
        color="#02c8ff"
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        )
        :(
          <Navigate to="/homepage" replace={true}/>
        )}
        <Routes>
        <Route path='/homepage' Component={Homepage}/>
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
