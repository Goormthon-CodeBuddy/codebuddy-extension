/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import React from 'react';
import Logo from './Logo';
import './App.css';
import { Button } from '@goorm-dev/gds-components';

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
      <header className="App-header">
        <Logo className="App-logo" id="App-logo" title="React logo" />
        <p>Hello, World!</p>
        <p>I'm a Chrome Extension</p>
        <Button variant="primary" onClick={handleNotification}>
          Primary
        </Button>
      </header>
    </div>
  );
}

export default App;
