import React from 'react';
//import child components/ containers
import Navbar from './components/Navbar.jsx';
import ContentContainer from './containers/ContentContainer.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
//import react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ContentContainer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
