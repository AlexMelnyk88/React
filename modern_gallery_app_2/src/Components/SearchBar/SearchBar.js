import React, { Component } from 'react';
import axios from 'axios';
import { SearchField } from './SearchField.js';
import { Select }from './Select.js';
import { Loader } from '../Loader/Loader.js';
import  ImagesList  from '../ImagesList/ImagesList.js';

 class SearchBar extends Component {

  state={
    searchText:'',
    quantity:10,
    images:[],
    apiUrl:"https://pixabay.com/api",
    apikey:"Here you should add your own Api Key"
  }
 
 GetApi=async()=>{
  const{searchText, quantity, apiUrl, apikey}= this.state
    const response = await axios.get(
      `${apiUrl}/?key=${apikey}&q=${searchText}&image_type=photo&per_page=${quantity}`
      );
    this.setState({ images: response.data.hits })
 }

 onSearchChange=(e)=>{
   this.setState({searchText: e.target.value});
    let value = e.target.value;
    if(value === ''|| value === undefined){
     this.setState({images: []});
    }else{
    this.setState({searchText: e.target.value});
    this.GetApi();
    }
 }

  onAmountChange =(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }

  onSubmit=(e)=>{
  e.preventDefault();
  }
  render() {
    return (
        <form  autoComplete="off" onSubmit={this.onSubmit} >
             <SearchField   onChange={this.onSearchChange} />
             <br/><br/>
             <Select  onChange={this.onAmountChange} state={this.state.Amount}/>
             <br/><br/>
             {this.state.images.length > 0 ? <ImagesList images={this.state.images}/> : <Loader/>}
        </form>       
    )
  }
}
export default SearchBar;


