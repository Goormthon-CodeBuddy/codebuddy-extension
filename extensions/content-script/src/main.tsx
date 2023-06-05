import React from "react";
import { createPortal } from "react-dom";
import { createRoot } from "react-dom/client";
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import "./main.css";
import Landing from "./pages/Landing/Landing";

const router = createMemoryRouter([
  {
    path: '/',
    element: <Landing />,
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

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);