import React from 'react';
import { getCurrentWindow } from "@tauri-apps/api/window"

const appWindow = getCurrentWindow(); 

function Minimize(){
    appWindow.minimize();
}

function Maximize() {
    let maximizeState = appWindow.isMaximized()

    if (!maximizeState) {
        appWindow.maximize()
    } else {
        appWindow.unmaximize()
    }
}

function  Close() {
    appWindow.close()
}
class Header extends React.Component {
  render() {
    return (
      <div>
     <nav data-tauri-drag-region className="drag-area" aria-label="Global">
            
                    <button onClick={Minimize} className="minimize-button">minimize</button>
                    <button onClick={Maximize} className="maximize-button">maximize</button>
                    <button onClick={Close} className="hide-button">close</button>
                
            
        </nav>
      </div>
    );
  }
}

export default Header;
