import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
    <div>
        <div className='header'>
          <h1>LeadSquared Assignment (Ravindra Sapkal)</h1>
        </div>
        <div className='btn'>
          <Link to='/EasyFetch'>
              <button className='button'>Easy Fetch Image</button>
          </Link>
          <Link to='/MediumFetch'>
              <button className='button'>Medium Fetch Image</button>
          </Link>
          <Link to='/HardFetch'>
              <button className='button'>Hard Fetch Image</button>
          </Link>
        </div>
    </div>
  );
};

export default Home;




