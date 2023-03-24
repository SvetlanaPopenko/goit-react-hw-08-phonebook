import { AuthNuv } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { Container } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNuv />}
    </Container>
  );
};
