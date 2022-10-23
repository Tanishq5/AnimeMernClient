import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import Aos from "aos";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import "react-status-alert/dist/status-alert.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, } from "redux";
import Reducers from "./redux/reducers/reducers";
import ReduxThunk from "redux-thunk";

const store = createStore(Reducers, applyMiddleware(ReduxThunk));

Aos.init({
  delay: 10,
  duration: 800,
  offset: 120,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
