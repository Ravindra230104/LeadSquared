import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home'
import EasyFetch from './components/EasyFetch/EasyFetch'
import MediumFetch from './components/MediumFetch/MediumFetch'
import HardFetch from './components/HardFetch/HardFetch'

function App() {
    return (
        <Router>
            <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/EasyFetch" element={<EasyFetch/>} />
               <Route path="/MediumFetch" element={<MediumFetch/>} />
               <Route path="/HardFetch" element={<HardFetch/>} />
            </Routes>
        </Router>
    );
}

export default App;
