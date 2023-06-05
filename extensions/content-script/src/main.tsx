import React from "react";
import { createRoot } from "react-dom/client";
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import "./main.scss";
import App from "./App";

const router = createMemoryRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const body = document.querySelector("body");
const app = document.createElement("div");

app.id = "root";

if (body) {
  body.prepend(app);
}

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);