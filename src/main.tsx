import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import  from "./App";
import View from "./View";
import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';
import { invoke } from '@tauri-apps/api/core';
import { register } from '@tauri-apps/plugin-global-shortcut';
import { useState } from "react";
let keyPressedCounter = 0;

async function handleKeys(){
    await register('CommandOrControl+Shift+V', () => {
        console.log('Shortcut triggered');
        keyPressedCounter +=  1;
        if (keyPressedCounter=== 2){
          changeMode();
          keyPressedCounter = 0;
        }
     })
     
}

   
}
handleKeys();
var altControlV = false;
// async function toggleFullscreen() {
//   const isFullscreen = await invoke('is_fullscreen');
//   await invoke('set_fullscreen', { fullscreen: !isFullscreen });
// }
// await getCurrentWindow().setIgnoreCursorEvents(true);
// toggleFullscreen
// const logicalSize = new LogicalSize(window.outerWidth,window.innerHeight)
// await getCurrentWindow().setSize(logicalSize);

// await getCurrentWindow().setAlwaysOnTop(true);
// await register('CommandOrControl+Shift+V', () => {
//   console.log('Shortcut triggered');
//   if (altControlV){
//     ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//       <React.StrictMode>
//         <View />
//       </React.StrictMode>,
      
//     )}else{
//       ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//         <React.StrictMode>
//           <App />
//         </React.StrictMode>,
//   )};
//   altControlV = !altControlV;
  
// });
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div>
<React.StrictMode>
  <App />
</React.StrictMode>,
  </div>
  
)