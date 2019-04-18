import React from 'react';
import { InputLabel, NativeSelect } from '@material-ui/core/';

export const Select=( {onChange, state} )=> {
  return (
    <React.Fragment> 
        <InputLabel> quantity </InputLabel>
        <NativeSelect
        value={state}
        onChange={onChange}
        name="quantity"
        >
        <option value={10}>10</option>
        <option value={20}>20</option>
        </NativeSelect>
    </React.Fragment>  
  );
}
