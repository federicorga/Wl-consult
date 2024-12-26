import './SectionContact.css'
import ContactoForm from '../ContactoForm/ContactoForm';
import IcoEmail from '../IconsSVG/IcoEmail';
import IcoLlamada from '../IconsSVG/IcoLlamada';
import IcoWhatsapp from '../IconsSVG/IcoWhatsapp';
import PortadaSections from '../PortadaSections/PortadaSections';
import Subtitleh2 from '../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2';
import IcoDireccion from '../IconsSVG/IcoDireccion';
import IcoHora from '../IconsSVG/IcoHora';
import Subtitleh3 from '../ComponentesAccesorios/Subtitles/Subtitleh3/Subtitleh3';
import IcoUbicacion from '../IconsSVG/IcoUbicacion';
import { Link } from 'react-router-dom';

import { telefonoWhatsapp,textoPredeterminadoWhatsapp } from '../WhatsappAccesor/WhatsappLink';

function SectionContact() {
  return (
    <>
      <PortadaSections titlePortada={"Contacto"} imagen={"https://img.freepik.com/fotos-premium/pongase-contacto-nosotros-mano-empresario-sosteniendo-telefono-inteligente-movil-icono-correo-telefono-correo-electronico_52701-38.jpg"}/>
      <section className='section-content-all-contact'>
      <div className='div-content-All-Contact'>
        <div className='div-content-contact-titles'>
        <IcoDireccion width='36' height='46' />
        <Subtitleh2 text={"Medios de Contacto"}/>
        </div>
        <div className='div-elementor-ico-list-items-contact'>
          
        <ul className="elementor-icon-list-items">
          <li className="elementor-icon-list-item">
          <Link to={`tel:+541536167336`} target="_blank">
       
          <IcoLlamada width='30' height='30'/>
          <span className="elementor-icon-list-text">Teléfono: +54 9 11 5314-0359</span> 
          </Link></li>
          <li className="elementor-icon-list-item"> 
          <Link to={`mailto:wlconsultoraintegral@gmail.com`} target="_blank">
          <IcoEmail width='30' height='30'/>
          <span className="elementor-icon-list-text">Email: wlconsultoraintegral@gmail.com</span> 
          </Link>
          </li>
          <li className="elementor-icon-list-item"> 
          <Link to={`https://wa.me/${telefonoWhatsapp}/?text=${textoPredeterminadoWhatsapp}`}target="_blank">
        <IcoWhatsapp width='30' height='30'/>
         <span className="elementor-icon-list-text">Whatsapp: +54 9 11 5314-0359</span></Link></li>
        </ul>
        
      </div>

      <div className='div-content-contact-titles'>
       <IcoHora width='40' height='40'/>
       <Subtitleh2 text={"Nuestros horarios"}/>
        </div>
        <div className='div-elementor-ico-list-items-contact'>
          <p>Lunes a viernes de 09:00hs a 18:00hs</p>     
        </div>
        <section className='Section-Mapa-Contacto'>
        <div className='div-content-contact-title-map'>
        <IcoUbicacion width='30' height='30'/>
        <Subtitleh2 text={"Nuestras oficinas"}/>
        
        </div>
      <Subtitleh3 text={"Belgrano 1095 - San Fernando"}/>
      <iframe className='mapa-contact'
      title="Mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.3614308425367!2d-58.56169332439111!3d-34.442972049026615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca563ef1e8a1f%3A0x146f5791e1525ee0!2sBelgrano%201095%2C%20B1646%20San%20Fernando%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1706380443844!5m2!1ses!2sar"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      </section>
      </div>
      
      <ContactoForm title='Dejenos su consulta'/>
      </section>
     
     
    </>
  );
}

export default SectionContact;
