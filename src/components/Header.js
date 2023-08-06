import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useInternetCheck } from "../utils/useInternetCheck";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  // console.log("Header render");
  // useEffect(() => {
  //   console.log("useeffect called");
  // });
  const isOnline = useInternetCheck();
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="Logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              Online Status:
              {isOnline === true ? (
                <button className="online"></button>
              ) : (
                <button className="Offline"></button>
              )}
            </li>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link>
              <li>Contact Us</li>
            </Link>
            <Link to="/grocery">
              <li>Grocery</li>
            </Link>
            <Link>
              <li>Cart</li>
            </Link>
            <button
              className="btn-login"
              onClick={() => {
                isLoggedIn === "Login"
                  ? setIsLoggedIn("Logout")
                  : setIsLoggedIn("Login");
              }}
            >
              {isLoggedIn}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};
