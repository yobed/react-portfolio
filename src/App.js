import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    
    <div className="home">
      <h1>Sample</h1>
    </div>
    <div className="home">
      <h1>daboy</h1>
    </div>

    </> 
  );
}

export default App;
