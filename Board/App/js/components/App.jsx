// src/js/components/App.js
import React from "react";
import Title from "./Title";
import MainBlock from "./MainBlock"
import { Link, Route } from 'react-router-dom';

const App = () => (   
    <div>      
        <Title />
        <MainBlock />          
    </div>
);
export default App;


