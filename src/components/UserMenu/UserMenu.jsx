import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { Button } from '@mui/material';
import { UserContainer, UserText } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <UserContainer>
      <UserText>Welcome, {user.name}</UserText>
      <Button type="button" variant="contained" onClick={handleLogOut}>
        Logout
      </Button>
    </UserContainer>
  );
};
