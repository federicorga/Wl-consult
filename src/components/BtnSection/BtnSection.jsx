import "./BtnSection.css";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../assets/main";
function BtnSection({url, titleBtn}) {

  return (
    <>
        <div className={`div-BtnSection-text`}>
        <Link className="BtnSection-link-text" onClick={scrollToTop} to={url}>
            <p className="BtnSection-btn-text">{titleBtn}</p>
            </Link>
        </div>
    </>
  );
}

export default BtnSection;
