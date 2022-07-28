import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_ACTION } from "../../modules/public/authPage/auth.action";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const onLogOut = () => {
    dispatch(LOGOUT_ACTION.onLogoutRequest());
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLogin && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLogin && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLogin && (
            <li>
              <Link to="/" onClick={onLogOut}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
