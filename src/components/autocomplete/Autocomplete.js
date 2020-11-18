/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import states from '../../resources/states.json';

const SearchBox = ({ onClick }) => {
  const options = states.map((x) => x.name);
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          onClick(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Select state" variant="outlined" />}
      />
    </div>
  );
};
export default SearchBox;
