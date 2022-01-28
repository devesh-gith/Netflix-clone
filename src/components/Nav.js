import React, { useEffect, useState } from "react";
import "../style/nav.css";
import { useNavigate } from "react-router-dom";
function Nav() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const scrollProperty = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollProperty);
    return () => window.addEventListener("scroll", scrollProperty);
  });

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        onClick={() => navigate("/")}
        className="img__logo"
        src="https://nativeadvertisinginstitute.com/wp-content/uploads/2015/03/Netflix_Logo_Digital-Video.png"
        alt=""
      />

      <img
        onClick={() => navigate("/profile")}
        className="img__avtar"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u1.jpg"
        alt=""
      />
    </div>
  );
}

export default Nav;
