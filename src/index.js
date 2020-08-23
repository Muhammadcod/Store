import React from "react";
import ReactDOM from "react-dom";
import "./Style.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./fonts/ProximaNovaA-Bold.woff";
import "./fonts/ProximaNovaA-Extrabld.woff";
import "./fonts/ProximaNovaA-Light.woff";
import "./fonts/ProximaNovaA-Semibold.woff";
import "./fonts/ProximaNovaA-Bold.woff";
import "./fonts/ProximaNovaS-Regular.woff";
import "./fonts/CRC35.woff";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
