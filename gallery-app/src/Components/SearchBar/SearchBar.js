import React,{ Component } from 'react';

class SearchBar extends Component {
     
    state = { res: null };

onInputChange=(e)=>{
    this.setState({ res: e.target.value})
}    

onFormSubmit=(e)=>{
    e.preventDefault();
    this.props.runSubmit(this.state.res);
}
    render(){
        return(
                  <div className="ui container">
                    <div className="ui grey secondary segment">
                     <form className="ui form" onSubmit={this.onFormSubmit}>
                      <div className="field">
                        <label>Search:</label>
                        <label>for example: cars,planes,flowers</label>
                        <input type="text" onChange={this.onInputChange}/>
                      </div>
                    </form>
                   </div>
                 </div>    
         );    
    }
}
export default SearchBar;