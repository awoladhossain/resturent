import { useState } from "react";
import { assets } from "../../assets/food del assets/frontend_assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={()=>setMenu("mobileApp")} className={menu === "mobileApp" ? "active" : ""}>Mobile-App</li>
        <li onClick={()=>setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact Us</li>
      </ul>
      <ul className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"> </div>
        </div>
        <button>sing in </button>
      </ul>
    </div>
  );
};

export default Navbar;
