import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div className="hw-header site-header--wrapper">
      <nav
        className="navbar navbar-default"
        role="navigation"
        data-module="nav-tabs"
      >
        <div className="container-fluid">
          <img
            className="hw-logo"
            alt="hotwire"
            src="https://ak-secure.hotwirestatic.com/current/static/images/branding/hw-logos/hotwire-logo.svg"
          />
          <span className="floatRight hotelName">
            {" "}
            <b>Hi Marriot Group !</b>
          </span>
        </div>
      </nav>
    </div>
    <App />
  </React.StrictMode>,
  rootElement
);
