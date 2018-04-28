//import ReactDOM from 'react-dom';
//import React from 'react';
//import jQuery from 'jquery';
//import connect from 'react-redux';
//global.$ = jQuery;
//import store from "../js/store/index";
//import { addArticle } from "../js/actions/index";

//ReactDOM.render(
//    <MainComp url="/contacts"/>,
//    document.getElementById('content')
//);
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./components/App";
import { BrowserRouter as Router, Route } from 'react-router-dom'

render(
    <Router>
        <Provider store={store}>
            <App/>         
        </Provider>
    </Router>,
    document.getElementById("content")
);


 