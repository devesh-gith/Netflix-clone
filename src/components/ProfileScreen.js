import React from "react";
import Nav from "./Nav";
import "../style/profilescreen.css";
import { selectuser } from "../features/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
function ProfileScreen() {
  const user = useSelector(selectuser);

  const signOut = () => {
    auth.signOut();
  };
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u1.jpg"
            alt=""
          />
          <div className="profileScreen_details">
            <h1>{user.email}</h1>
            <div className="profileScreen__plans">
              <h2>Plans</h2>
              <button onClick={signOut} className="signOut__button">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
