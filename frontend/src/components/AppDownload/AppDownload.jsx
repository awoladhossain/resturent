import { assets } from "../../assets/food del assets/frontend_assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="appdownload" id="appdownload">
      <p>
        For Better Experence Download <br /> Yaleen Food App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};
export default AppDownload;
