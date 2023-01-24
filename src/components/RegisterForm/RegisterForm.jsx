import { useDispatch } from 'react-redux';
import { registerNewUser } from 'redux/user/userOperations';
import { Button, Box, TextField, Container } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(registerNewUser(newUser));
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
            type="text"
            name="name"
            id="outlined-username"
            label="Username"
            variant="outlined"
            sx={{ width: '320px' }}
          />
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
            Register
          </Button>
        </Box>
      </Container>
    </>
  );
};
