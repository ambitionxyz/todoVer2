import { useState, useEffect, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_ACTION } from "../../modules/public/authPage/auth.action";
import { REGISTER_ACTION } from "../../modules/public/authPage/auth.action";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const dispatch = useDispatch();
  const logger = useSelector((state) => state.user.isLogin);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  console.log(isLogin);
  // const [isLoading, setIsLoading] = useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (isLogin) {
      dispatch(
        LOGIN_ACTION.onLoginRequest({
          email: enteredEmail,
          password: enteredPassword,
        })
      );
    } else {
      dispatch(
        REGISTER_ACTION.onRegisterRequest({
          email: enteredEmail,
          password: enteredPassword,
        })
      );
    }

    // setIsLoading(true);
  };

  return (
    <Fragment>
      {!logger && (
        <section className={classes.auth}>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Your Password</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
              />
            </div>
            <div className={classes.actions}>
              <button>{isLogin ? "Login" : "Create Account"}</button>

              {/* {isLoading && <p>Sending request...</p>} */}
              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </section>
      )}
    </Fragment>
  );
};

export default AuthForm;
