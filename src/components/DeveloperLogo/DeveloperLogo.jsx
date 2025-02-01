import './DeveloperLogo.css'
import { Link } from "react-router-dom";

const DeveloperLogo = () => {
  return (
    <>
     <Link className='icon-footer-section' to={`https://federicogarea.netlify.app/#inicio`}> <p className="textodesarrollador">Powered By <img className="logo-desarrollador" alt='Logo-DesarrolladorWeb' width="37px" src="/img/fedlogo.png"></img></p></Link>
    </>
  );
}

export default DeveloperLogo;
