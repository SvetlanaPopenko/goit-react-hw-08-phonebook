import { useDispatch, useSelector } from "react-redux";
import { logOut } from "redux/auth/auth-operations";
import {selectUser} from "redux/auth/auth-selectors";

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
    const name = useSelector(selectUser);
    
  return (
    <div style={styles.container}>
          <p style={styles.name}>Welcome, { name}</p>
      <button type="button" onClick={()=>dispatch(logOut())}>Logout</button>
    </div>
  );
};
