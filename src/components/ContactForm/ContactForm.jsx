import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/selectors';
import { Button, Box, TextField, Container } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    const findContact = contacts.find(contact => contact.name === name);
    if (findContact) {
      alert('Already in Contacts');
      return;
    }
    const newContact = {
      name: name,
      number: number,
    };

    dispatch(addContact(newContact));
    event.target.reset();
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
            marginBottom: '50px',
          }}
          onSubmit={handleSubmit}
          component="form"
        >
          <TextField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="outlined-name-text"
            label="Name"
            variant="standard"
            sx={{ width: '320px' }}
          />
          <TextField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="outlined-number-tel"
            label="Number"
            variant="standard"
            sx={{ width: '320px' }}
          />
          <Button
            variant="outlined"
            type="submit"
            color="inherit"
            sx={{ width: '150px', color: '#b553ab' }}
          >
            Add contact
          </Button>
        </Box>
      </Container>
    </>
  );
};
