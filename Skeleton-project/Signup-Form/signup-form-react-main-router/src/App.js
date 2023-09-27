import './App.css'
import React, { useState, createContext, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from './components/Signup';


function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Signup />} />
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;