import { useAuth } from 'hooks';
import { NavigationMenu, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationMenu>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">Contacts</StyledLink>)}
    </NavigationMenu>
  );
};
