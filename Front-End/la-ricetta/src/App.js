import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidenav from './components/sidenav';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router> 
            <Navbar></Navbar>
      <div style={{ display: 'flex' }}>
        {/* <Sidenav /> */}
        <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
          <Routes>
            <Route path="/charts/pie" element={<h2>Latest Recipes</h2>} />
            <Route path="/charts/line" element={<h2>Top Rated Recipes</h2>} />
            <Route path="/documentation" element={<h2>How To Add Recipes</h2>} />
            <Route path="/calendar" element={<h2>Terms and Conditions</h2>} />
            <Route path="/e-commerce" element={<h2>F&Q</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
