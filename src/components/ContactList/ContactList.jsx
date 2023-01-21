import { List, Btn, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(state => state.filter);
  const filteredContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filteredContactsList.map(({ name, phone, id }) => (
        <Item key={id}>
          <div>
            {name}:{phone}
          </div>
          <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
            delete
          </Btn>
        </Item>
      ))}
    </List>
  );
};
