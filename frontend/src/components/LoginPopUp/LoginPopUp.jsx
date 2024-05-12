/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/food del assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  const { url, setStoreToke } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangehandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  // login

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setStoreToke(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };
  console.log(data);

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
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
            <input
              name="name"
              onChange={onChangehandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            name="email"
            onChange={onChangehandler}
            value={data.email}
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            name="password"
            onChange={onChangehandler}
            value={data.password}
            type="password"
            placeholder="Your Password"
            required
          />
        </div>
        <button type="submit">
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
