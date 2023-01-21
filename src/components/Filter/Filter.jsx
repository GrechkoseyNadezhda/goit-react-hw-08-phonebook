import { Label, Input } from './Filter.styled';
import { filterContact } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      find contacts by name
      <Input
        type="text"
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </Label>
  );
};
