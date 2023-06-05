/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import Logo from './Logo';
import './App.css';
import Header from './components/Header';
import './goormstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import TemplatePage from './components/TemplatePage';
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/templatePage" element={<TemplatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
