import { useDispatch } from 'react-redux';
import { logOut } from 'redux/user/userOperations';
import { useSelector } from 'react-redux';
import { Button, Box, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  return (
    <>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <Typography
          variant="h6"
          component="p"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Welcome, {user.name}
        </Typography>
        <Button
          variant="outlined"
          type="button"
          onClick={() => dispatch(logOut())}
          color="inherit"
        >
          Logout
        </Button>
      </Box>
      {/* <p>Welcome, {user.name}</p> */}
      {/* <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button> */}
    </>
  );
};
