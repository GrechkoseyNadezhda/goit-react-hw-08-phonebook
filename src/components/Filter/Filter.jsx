import { filterContact } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <TextField
        type="text"
        name="text"
        id="outlined-text"
        label="find contacts by name"
        sx={{ width: '320px' }}
        onChange={e => dispatch(filterContact(e.target.value))}
        variant="standard"
      />
    </>
  );
};
