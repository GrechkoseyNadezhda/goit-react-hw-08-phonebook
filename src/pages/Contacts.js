import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading, getError } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Typography, Container } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="sm" sx={{ paddingTop: '50px', textAlign: 'center' }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'block', textAlign: 'center' },
          }}
        >
          Phonebook
        </Typography>
        <ContactForm />
        <Filter />
        {isLoading && <Loader />}
        <ContactList />
        {error && <p>{error}</p>}
      </Container>
    </>
  );
}
