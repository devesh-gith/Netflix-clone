import React, { useRef } from "react";
import { auth } from "../firebase";
import "../style/signinscreen.css";
function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="signin__screen">
      <h2>Sign In</h2>
      <div className="signin__details">
        <form>
          <input
            ref={emailRef}
            type="text"
            placeholder="Email or phone number"
          />
          <input
            ref={passwordRef}
            type="password"
            id="passowrd"
            placeholder="Password"
          />

          <button onClick={signIn} className="signin__button">
            Sign In
          </button>
        </form>
      </div>
      <div className="signin__bottom">
        <span>New to Netflix?</span>
        <span onClick={register}>Sign up now.</span>
      </div>
    </div>
  );
}

export default SignInScreen;
