import './App.css';
import styled from 'styled-components';
// import { useState } from 'react';
// import { Counter2 } from 'components/Counter';

import { Button } from 'components/Button';
import {Page} from 'components/Page';
import { Route, Routes } from 'react-router-dom';
import Home from 'conterner/Home/Home';
import About from 'conterner/About/About';
import MainLayout from 'layout/MainLayout';
function App() {

  return (
    <MainLayout>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      
    </Routes>
    </MainLayout>
  );
}

export default App;