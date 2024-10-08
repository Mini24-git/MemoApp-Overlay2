import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';


const logicalSize = new LogicalSize(window.outerWidth,window.innerHeight)
await getCurrentWindow().setSize(logicalSize);

await getCurrentWindow().setAlwaysOnTop(true);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
