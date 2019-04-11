import React, { Component } from 'react';
import Arr from './Components/Arr.js';
import Info from './Components/Info.js';

class Showtext extends Component{
    constructor(){
        super();
        this.state = {IsLoading: true, page: " " }
       
    }

    render(){
          const TextRes = Arr.map((item) => <Info key={item.id} product={item}/>);                       
        return(
            <div>                                                                
               {TextRes}                                           
            </div>
        );   
    }
}
export default Showtext;
