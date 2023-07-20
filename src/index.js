import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app")); // createRoot(container!) if you use TypeScript
root.render(<App />);
