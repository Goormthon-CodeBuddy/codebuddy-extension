import React, { createContext, useState } from 'react';
import Logo from './Logo';
import './App.css';
import Header from './components/Header';
import './goormstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import TemplatePage from './components/TemplatePage';

export const AppContext = createContext({
  roomIndex: {},
  setRoomIndex: () => {},
});

const AppProvider = ({ children }) => {
  const [roomIndex, setRoomIndex] = useState(0); // Set your initial state here
  return (
    <AppContext.Provider value={{ roomIndex, setRoomIndex }}>
      {children}
    </AppContext.Provider>
  );
};

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/templatePage" element={<TemplatePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
