import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import View from "./View";
import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';
import { register } from '@tauri-apps/plugin-global-shortcut';
var altControlV = false;
const logicalSize = new LogicalSize(window.outerWidth,window.innerHeight)
await getCurrentWindow().setSize(logicalSize);
function modeChange(){
  if ( altControlV){
    altControlV = false;
  }else if(!altControlV){
    altControlV = true;
  }else{
    console.log("Shortcut Flag is wrong!")
  }
}
await getCurrentWindow().setAlwaysOnTop(true);
await register('CommandOrControl+Shift+V', () => {
  modeChange();
  console.log('Shortcut triggered');
});
if (altControlV){
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <View />
    </React.StrictMode>,
    
)}else{
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
)}
;
