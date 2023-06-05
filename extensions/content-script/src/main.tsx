import React, { createContext, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import "./main.css";
import Landing from "./pages/Landing/Landing";

const router = createMemoryRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/test',
    element: <div>test</div>,
  },
]);

const body = document.querySelector("body");
const app = document.createElement("div");
app.id = "root";

if (body) {
  body.append(app);
}

const container = document.getElementById("root");
const root = createRoot(container!);

export const AppContext = createContext({
  roomIndex: {},
  updateRoomIndex: (index: number) => {},
});

const AppProvider = ({ children }) => {
  const [roomIndex, setRoomIndex] = useState(0); // Set your initial state here
  const updateRoomIndex = (index: number) => setRoomIndex(index);

  return (
    <AppContext.Provider value={{ roomIndex, updateRoomIndex }}>
      {children}
    </AppContext.Provider>
  );
};


root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);