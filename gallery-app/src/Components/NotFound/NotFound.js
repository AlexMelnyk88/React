import React from 'react';
import './NotFound.css';

const NotFound = ()=>{
    return(
        <div className="ui container not-found">
            <div className="ui negative message ">
              <div className="header">
              Results have not been found 
              </div>
              <p>Try again!</p>
            </div>
        </div>   
        );  
}
export default NotFound;
           