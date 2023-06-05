/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import Logo from './Logo';
import './App.css';
import Header from './components/Header';

function App() {
  const handleNotification = () => {
    chrome.notifications.create({
      type: 'basic',
      title: 'Code Buddy',
      message: 'You have an alert in 15 minutes',
      iconUrl: 'favicon.ico',
    });
  };

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
