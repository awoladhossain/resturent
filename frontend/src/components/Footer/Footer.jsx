import { assets } from "../../assets/food del assets/frontend_assets/assets";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-contain-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            deserunt, tempora dolore praesentium hic maiores omnis perspiciatis
            culpa autem eos alias ipsum repudiandae quisquam iure nisi sapiente!
            Temporibus, tempora at!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-contain-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Deliviary</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-contain-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+254164916478</li>
            <li>yaleen@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        CopyRight 2024 Yaleen.com-All Right Reserve
      </p>
    </div>
  );
}
export default Footer;
