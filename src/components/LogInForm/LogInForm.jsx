import { useDispatch } from 'react-redux';
import { login } from 'redux/user/userOperations';

import { Button, Box, TextField, Container } from '@mui/material';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(login(userData));
    form.reset();
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
          }}
          onSubmit={handleSubmit}
          autoComplete="on"
          component="form"
        >
          <TextField
            type="email"
            name="email"
            id="outlined-email"
            label="Email"
            variant="outlined"
            sx={{ width: '320px' }}
          />
          <TextField
            type="password"
            name="password"
            id="outlined-password"
            label="Password"
            variant="outlined"
            sx={{ width: '320px' }}
          />
          <Button
            variant="outlined"
            type="submit"
            color="inherit"
            sx={{ width: '100px', color: '#b553ab' }}
          >
            Log In
          </Button>
        </Box>
      </Container>
    </>
  );
};
