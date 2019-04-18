import React, { Component, Fragment } from 'react'
import { NavBar } from './NavBar/NavBar';
import  SearchBar  from './SearchBar/SearchBar';

 class MainApp extends Component {
  render() {
    return (
         <Fragment>
          <NavBar />
          <SearchBar />
         </Fragment>
    );
  }
}
export default MainApp;

