/* eslint-disable react/prop-types */
import { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/food del assets/frontend_assets/assets";

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sing Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>
          {currentState === "Sing Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new Account?{" "}
            <span onClick={() => setCurrentState("Sing Up")}>Click Here</span>{" "}
          </p>
        ) : (
          <p>
            Already Have An Account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login Here</span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};
export default LoginPopUp;
