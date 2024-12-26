import './InfoServicio.css'
import Subtitleh2 from "../../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2";
import IcoCard from "../../IconsSVG/IcoCard";
import IcoDinero from "../../IconsSVG/IcoDinero";
import IcoMercadoLibre from "../../IconsSVG/IcoMercadoLibre";
import IcoHora from '../../IconsSVG/IcoHora';
import IcoWhatsapp from '../../IconsSVG/IcoWhatsapp';
import IcoVideoLlamada from '../../IconsSVG/IcoVideoLlamada';
import IcoEmail from '../../IconsSVG/IcoEmail';
import Subtitleh3 from '../../ComponentesAccesorios/Subtitles/Subtitleh3/Subtitleh3';
function InfoServicio() {
  return (
    <section className='Section-InfoServicio-Grups-All'>

    <div className='InfoServicio-Card'>
      <IcoHora width='35' height='35'/>
      <Subtitleh2 clase={'sub-info-servh2'} text={"Disponibilidad"}/>
      <div className='content-InfoServicio-Grups'>
      <Subtitleh3 text={"Opciones de comunicacion"}/>
      <div className="grupoElementos-InfoServicio">
      <div className="infoservicio-item"><IcoVideoLlamada width='25' height='25'/><p>Videollamada</p></div>
      <div className="infoservicio-item"><IcoWhatsapp width='25' height='25'/><p>Whatsapp</p></div>
      <div className="infoservicio-item">< IcoEmail width='25' height='25'/><p>Correo electronico</p></div>
      </div>
      </div>
    </div>        
    <div className='InfoServicio-Card'>
        <IcoCard width='35' height='35'/>
        <Subtitleh2 clase={'sub-info-servh2'} text={"Formas de Pago"}/>
        <div className='content-InfoServicio-Grups'>
        <Subtitleh3 text={"Pagá de la forma más simple"}/>
        <div className="grupoElementos-InfoServicio">
        <div className="infoservicio-item padg"><IcoDinero width='25' height='25'/><p>Efectivo</p></div>
        <div className="infoservicio-item padg "><IcoMercadoLibre width='35' height='35'/><p className='padmercado'>Mercado Pago</p></div>
        <div className="infoservicio-item padg"><IcoCard width='25' height='25'/><p>Tarjeta de Credito</p></div>
        </div>
        </div>
     </div>

   
    </section>
  );
}

export default InfoServicio;
