import { useDispatch } from 'react-redux';
import { registerNewUser } from 'redux/user/userOperations';
import { Button, Box, TextField } from '@mui/material';

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
      <Box
        sx={{ display: 'flex', gap: '20px' }}
        onSubmit={handleSubmit}
        autoComplete="on"
        component="form"
      >
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Box>
    </>
  );
};
