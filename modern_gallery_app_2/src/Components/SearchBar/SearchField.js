import React from 'react';
import { TextField } from '@material-ui/core/';
export const SearchField=({onChange})=> {
  return (
      <TextField
         label="Search"
         type="search"
         onChange={onChange}
      />
  );
}
