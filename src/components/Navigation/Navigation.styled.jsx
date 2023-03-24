import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: auto;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 24px;
  font-weight: 700;
  color: '#2a363b';
  &:hover,
  &:focus {
    color: #e84a5f;
  }
`;
