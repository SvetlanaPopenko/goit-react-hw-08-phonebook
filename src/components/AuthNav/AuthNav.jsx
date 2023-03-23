import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: '12px',
    fontWeight: 700,
    color: '#2a363b',
  },

  activelink: {
    color: '#e84a5f',
  },
};

export const AuthNuv = () => {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activelink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Log in
      </NavLink>
    </div>
  );
};
