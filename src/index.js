import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div class="hw-header site-header--wrapper">
      <nav
        class="navbar navbar-default"
        role="navigation"
        data-module="nav-tabs"
      >
        <div class="container-fluid">
          <img
            class="hw-logo"
            alt="hotwire"
            src="https://ak-secure.hotwirestatic.com/current/static/images/branding/hw-logos/hotwire-logo.svg"
          />
        </div>
      </nav>
    </div>
    <App />
  </React.StrictMode>,
  rootElement
);
