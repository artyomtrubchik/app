// src/js/components/App.js
import React from "react";
import List from "./List";
import Form from "./Form";
import Title from "./Title";
import { Link, Route } from 'react-router-dom';

const App = () => (   
    <div>      
            <Title />
            <div>
                <h2>Articles</h2>
                <Route path='/' component={List} />
            </div>
            <div>
            <Link to='/form'><h2>Add a new article</h2></Link>        
                <Route path='/form' component={Form} />
            </div>
    </div>
);
export default App;


const Some = () => {
    return (
        <h2>DFGDfgdfg</h2>
        )
}