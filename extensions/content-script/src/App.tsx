/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import React from 'react';

import './App.css';
import './goormstrap.css';

import Header from './components/Header';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import TemplatePage from './components/TemplatePage';

function App() {
  // const handleNotification = () => {
  //   chrome.notifications.create({
  //     type: 'basic',
  //     title: 'Code Buddy',
  //     message: 'You have an alert in 15 minutes',
  //     iconUrl: 'favicon.ico',
  //   });
  // };

  const handleNotification = () => {
    chrome.runtime.sendMessage({ action: 'createNotification' });
  };

  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/templatePage" element={<TemplatePage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
