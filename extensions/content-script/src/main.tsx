import React, { createContext, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import './main.css';
import Landing from './pages/Landing/Landing';
import TemplatePage from './pages/TemplatePage/TemplatePage';

const router = createMemoryRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/templatePage',
    element: <TemplatePage />,
  },
]);

const body = document.querySelector('body');
const app = document.createElement('div');
app.id = 'root';

if (body) {
  body.append(app);
}

const container = document.getElementById('root');
const root = createRoot(container!);

export const AppContext = createContext({
  roomIndex: {},
  updateRoomIndex: (index: number) => {},
  prompt: '',
  setPrompt: (prompt: string) => {},
  description: '',
  setDescription: (description: string) => {},
  stack: '',
  setStack: (stack: string) => {},
  type: '',
  setType: (type: string) => {},
});

const AppProvider = ({ children }) => {
  const [roomIndex, setRoomIndex] = useState(0); // Set your initial state here
  const updateRoomIndex = (index: number) => setRoomIndex(index);

  const [prompt, setPrompt] = useState('');
  const [description, setDescription] = useState('');
  const [stack, setStack] = useState('cpp');
  const [type, setType] = useState('에러 해결');

  return (
    <AppContext.Provider
      value={{
        roomIndex,
        updateRoomIndex,
        prompt,
        setPrompt,
        description,
        setDescription,
        stack,
        setStack,
        type,
        setType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
);
