import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "assets/css/normalize.css";
import "assets/css/fonts.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{ fontSize: '3rem', fontWeight: '900' }}>SITE UNDER CONSTRUCTION.</h1>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
