import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Button, Box } from '@mui/material';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <Button variant="outlined" component={NavLink} to="/" color="inherit">
          Home
        </Button>
        {isLoggedIn && (
          <Button
            variant="outlined"
            component={NavLink}
            to="/contacts"
            color="inherit"
          >
            Contacts
          </Button>
        )}
      </Box>

      {/* <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>} */}
    </>
  );
};
