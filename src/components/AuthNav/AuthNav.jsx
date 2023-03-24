import { AuthNavMenu, StyledLink } from './AuthNav.styled';

export const AuthNuv = () => {
  return (
    <AuthNavMenu>
      <StyledLink to="/register" end>
        Register
      </StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </AuthNavMenu>
  );
};
