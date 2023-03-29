import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter,Routes,Route}from 'react-router-dom'
import Home from './home';
import About from './about';
import Contact from './contact';
import User from './user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <Routes basename="/react-router-forms/">
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/contact/:id' element={<Contact/>}/>
    <Route path='/user' element={<User/>}/>
  </Routes>
  </HashRouter>
);