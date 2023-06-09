import React from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App";

const body = document.querySelector("#goorm_center_inner_layout");
const app = document.createElement("div");
app.id = "root";

if (body) body.prepend(app);

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
