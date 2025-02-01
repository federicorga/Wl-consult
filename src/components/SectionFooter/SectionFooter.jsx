import LogoWL from "../NavBar/LogoWL/LogoWL";
import "./SectionFooter.css"
import IcoLinkedIn from "../IconsSVG/IcoLinkedIn"
import IcoFacebook from "../IconsSVG/IcoFacebook";
import { Link } from "react-router-dom";
import IcoInstagram from "../IconsSVG/IcoInstagram";
import DeveloperLogo from "../DeveloperLogo/DeveloperLogo";

function SectionFooter() {
  return (
    <footer>
      <div className="div-footer-copyright"><p>©Copyright WL Wilhelm Leifermann Consultora, 2024</p></div>
      <div className="div-footer-logo">
      <LogoWL size={"200px"} />
      </div>
      <div className="div-footer-content-icons">
        <Link to={`https://www.facebook.com/wlconsultora`} className="icon-footer-section" target="_blank"><IcoFacebook width="37px"/></Link>
        <Link to={`https://www.linkedin.com/in/wl-consultora-547b302b6/`}className="icon-footer-section" target="_blank"><IcoLinkedIn width="40px"/></Link>
        <Link to={`https://www.instagram.com/wlconsultora/`}className="icon-footer-section" target="_blank"><IcoInstagram width="45px"/></Link>
      </div>
      <DeveloperLogo></DeveloperLogo>
    </footer>
  );
}

export default SectionFooter;
