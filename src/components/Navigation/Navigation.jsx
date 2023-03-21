import { NavLink } from "react-router-dom"

const styles = {
    link: {
  display: 'inline-block',
  textDecoration: 'none',
  padding: '12px',
  fontWeight: 700,
  color: '#2a363b',
},

activelink:{
  color: '#e84a5f',
}

}

export const Navigation = () => {
    return (
        <nav>
            <NavLink to="/" exact style={styles.link} activeStyle={styles.activelink}>Home</NavLink>
            <NavLink to="/contacts" exact style={styles.link} activeStyle={styles.activelink}>Contacts</NavLink>
        </nav>
    )
}

export default Navigation;