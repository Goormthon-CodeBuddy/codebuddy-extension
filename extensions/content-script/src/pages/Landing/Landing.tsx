/// <reference types="chrome" />
/// <reference types="vite-plugin-svgr/client" />

import React from 'react';

import './Landing.css';
import '../../goormstrap.css';

import Header from '../../components/Header';
import StartTemplateButton from '../../components/StartTemplateButton';
import SearchInput from '../../components/SearchInput';

function Landing() {
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
    <div className='wrapper'>
      <Header />
      <div className="startTemplateButtonContainer">
        <StartTemplateButton />
      </div>
      <SearchInput />
    </div>
  );
}

export default Landing;
