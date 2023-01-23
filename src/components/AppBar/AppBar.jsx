import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavBar } from 'components/NavBar/NavBar';
import { selectIsLoggedIn } from 'redux/selectors';
import { AppBar, Toolbar, Container } from '@mui/material';

export const AppHeaderBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <AppBar component="nav" position="static">
        <Toolbar>
          <Container
            maxWidth="sm"
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <NavBar />}
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
