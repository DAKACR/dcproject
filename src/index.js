import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "assets/css/normalize.css";
import "assets/css/fonts.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
