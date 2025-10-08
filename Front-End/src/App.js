import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';  // Correct path
import Footer from './components/Footer';
import AppRoutes from './routes/Routes';


function App() {
  return (
    <Router>
      <Navbar />  {/* Ensure Navbar is placed here */}
      <br/>
      <AppRoutes />  {/* Routes will render below Navbar */}
      <Footer/>
    </Router>
  );
}

export default App;
