/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import React from 'react';
import cn from 'classnames';

import CodeMirrorEditor from './components/CodeMirrorEditor';
import './App.css';
import { Button } from 'react-bootstrap';

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
    <div className={cn('wrapper', 'd-flex flex-column justify-content-center')}>
      <header className="App-header">
        <CodeMirrorEditor code={'console.log("test")'} />
        <p>Hello, World!</p>
        <p>I'm a Chrome Extension Content Script!</p>
        <p>Hello</p>
        <p>I'm a Chrome Extension Content</p>
        <Button variant="primary" onClick={handleNotification}>
          Primary
        </Button>
      </header>
    </div>
  );
}

export default App;
