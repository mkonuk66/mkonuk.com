import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "alertifyjs/build/css/alertify.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
