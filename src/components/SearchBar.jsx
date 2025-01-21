import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ value, onChange }) => {
  return (
    <TextField
      label="Search Tasks"
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      sx={{ marginBottom: 3 }}
    />
  );
};

export default SearchBar;
