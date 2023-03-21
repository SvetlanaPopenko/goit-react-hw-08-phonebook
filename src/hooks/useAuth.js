import { useSelector } from "react-redux";
import { selectUsername, selectIsLoggedIn, selectRefreshing } from "redux/auth/auth-selectors";

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectRefreshing);
    const user = useSelector(selectUsername);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};