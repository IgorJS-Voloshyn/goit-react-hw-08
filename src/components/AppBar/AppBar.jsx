import { useDispatch, useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
// import { Navigate } from "react-router-dom";

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  //  if (isLoggedIn) {
  //    return <Navigate to="/" replace />;
  //  }
  return (
    <div className={css.header}>
      {isLoggedIn && <div>Welcome, {user.name}</div>}

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {isLoggedIn && (
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(logout())}
        >
          Exit
        </button>
      )}
    </div>
  );
};
export default Header;
