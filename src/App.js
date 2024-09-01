import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Building from './pages/Building';
import CV from './pages/CV';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/building" element={<Building />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </Layout>
  );
}

export default App;