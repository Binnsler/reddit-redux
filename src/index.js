require('./index.scss');

import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";
import App from "./components/App";

let store = createStore( todoApp );

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById( "container" )
);
