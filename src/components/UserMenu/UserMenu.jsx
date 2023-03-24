import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { UserContainer, UserText, UserButton } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <UserContainer>
      <UserText>Welcome, {user.name}</UserText>
      <UserButton type="button" onClick={handleLogOut}>
        Logout
      </UserButton>
    </UserContainer>
  );
};
