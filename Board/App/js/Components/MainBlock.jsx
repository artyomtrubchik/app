import React from "react";
import { Route, Link } from 'react-router-dom';
import CreateBoardContainer from "./CreateBoard/CreateBoardContainer";
import Form from "./Form";

const MainBlock = () => (   
    <div>          
        <Route path='/' component={CreateBoardContainer} />    
        <Route path='/form' component={Form} />     
   </div>
 
)

export default MainBlock;