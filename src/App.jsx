import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
// import Class from './pages/Class';
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart/>} />
        {/* <Route path="/products" element={<Class />} /> */}
      </Routes>
    </>
  );
};

export default App;
