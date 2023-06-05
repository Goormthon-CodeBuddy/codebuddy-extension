/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import cn from 'classnames';

import CodeMirrorEditor from './components/CodeMirrorEditor';

import './App.css';

function App() {
  return (
    <div className={cn("wrapper", "d-flex flex-column justify-content-center")}>
      <header className="App-header">
        <CodeMirrorEditor code={"console.log(\"test\")"} />
        <p>Hello, World!</p>
        <p>I'm a Chrome Extension Content Script!</p>
      </header>
    </div>
  );
}

export default App;
