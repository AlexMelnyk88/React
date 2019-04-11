import React, {Component} from 'react';
import './style/id.css';

class Info extends Component{
    constructor(props){
        super();
        this.state = { IsShow: true };
    }
    
    MyState=()=>{
        this.setState({ IsShow: !this.state.IsShow}); 
    }
    
    render(){
        let ShowText = this.state.IsShow ? this.props.product.sometext : "";
        let Btn =  this.state.IsShow ? "Close" : " Open";
        return(
            <div>
                <h1 className="id"> topic: {this.props.product.id}
                <button onClick={this.MyState}> {Btn} </button>
                </h1>
                <p className="text"> {ShowText} </p>
            </div>   
        );
    }
}

export default Info;