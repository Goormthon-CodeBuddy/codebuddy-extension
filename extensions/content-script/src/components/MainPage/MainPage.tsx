import React from 'react';
import StartTemplateButton from '../StartTemplateButton/StartTemplateButton';
import SearchInput from '../SearchInput/SearchInput';

const MainPage = () => {
  return (
    <div>
      <div className="startTemplateButtonContainer">
        <StartTemplateButton />
      </div>
      <SearchInput />
    </div>
  );
};

export default MainPage;
