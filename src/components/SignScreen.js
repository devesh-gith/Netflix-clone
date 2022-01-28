import React, { useState } from "react";
import "../style/signscreen.css";
import SignInScreen from "./SignInScreen";
function SignScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="main__section">
      <div className="upper__section">
        <img
          className="img__logo"
          src="https://nativeadvertisinginstitute.com/wp-content/uploads/2015/03/Netflix_Logo_Digital-Video.png"
          alt=""
        />

        <button onClick={() => setSignIn(true)} className="sign__button">
          Sign In
        </button>
        <div className="background__gradient" />
      </div>
      {signIn ? (
        <SignInScreen />
      ) : (
        <div className="page__content">
          <div className="page__insider">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="content__button">
              <input type="text" placeholder="Email address" />
              <button onClick={() => setSignIn(true)} className="button">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignScreen;
