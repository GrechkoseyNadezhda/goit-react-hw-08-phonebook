import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/selectors';
import { IconButton, ListItem, List, ListItemText } from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(state => state.filter);
  const filteredContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <List sx={{ width: '320px', margin: '0 auto', paddingTop: '40px' }}>
        {filteredContactsList.map(({ name, number, id }) => (
          <ListItem key={id}>
            <ListItemText>
              {name}: {number}
            </ListItemText>
            <IconButton
              edge="end"
              aria-label="delete"
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
              variant="outlined"
              sx={{ color: '#b553ab' }}
            >
              <PersonRemoveIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
