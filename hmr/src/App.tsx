/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import Logo from './Logo';
import './App.css';
import Header from './components/Header';
import StartTemplateButton from './components/StartTemplateButton';
import './goormstrap.css';
import SearchInput from './components/SearchInput';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="startTemplateButtonContainer">
        <StartTemplateButton />
      </div>
      <SearchInput />
    </div>
  );
}

export default App;
