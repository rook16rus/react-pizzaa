import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

import "./scss/app.scss"

import App from './App';
import Cart from "./pages/Cart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<App/>}>
                        <Route path="/cart" element={<Cart/>}/>
                    </Route>
                </Routes>
            </Provider>
        </Router>

    </React.StrictMode>
);