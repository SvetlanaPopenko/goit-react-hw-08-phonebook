import { useAuth } from "hooks";
import { useDispatch} from "react-redux";
import { logOut } from "redux/auth/auth-operations";

const styles = {
    container: {
        display: 'flex',
        alignItemms:'center'
    },
    avatar: {
        marginRight:4,
    },
    name: {
        fontWeight: 700,
        marginRight:12,
    },
};


export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();
    
  return (
    <div style={styles.container}>
          <p style={styles.name}>Welcome, { user.name}</p>
      <button type="button" onClick={()=>dispatch(logOut())}>Logout</button>
    </div>
  );
};
