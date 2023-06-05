/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import React from 'react';
import Logo from './Logo';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  const onClickHandler = () => {
    chrome.runtime.sendMessage({ time: '1' }, function (response) {
      console.log(response);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" id="App-logo" title="React logo" />
        <p>Hello</p>
        <p>I'm a Chrome Extension Content</p>
        <Button variant="primary" onClick={onClickHandler}>
          Primary
        </Button>
      </header>
    </div>
  );
}

export default App;
