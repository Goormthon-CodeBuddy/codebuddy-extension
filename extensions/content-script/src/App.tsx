/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />
import React from 'react';

import './App.css';
import './goormstrap.css';

import Header from './components/Header';
import StartTemplateButton from './components/StartTemplateButton';
import SearchInput from './components/SearchInput';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className="startTemplateButtonContainer">
        <StartTemplateButton />
      </div>
      <SearchInput />
    </div>
  );
}

export default App;
