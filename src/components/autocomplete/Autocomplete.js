/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import states from '../../resources/states.json';

const SearchBox = ({ onClick, setName }) => {
  const options = states.map((x) => x.name);
  const [value, setValue] = useState();
  const [inputValue, setInputValue] = React.useState('');
  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          setName(newValue);
          onClick(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states"
        options={options}
        style={{ width: 300, padding: '45px 10px 50px' }}
        renderInput={(params) => <TextField {...params} label="Select state" variant="outlined" />}
      />
    </div>
  );
};
export default SearchBox;
