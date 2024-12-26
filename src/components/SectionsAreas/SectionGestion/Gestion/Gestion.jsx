import './Gestion.css'
import { Link } from 'react-router-dom';
import Subtitleh2 from '../../../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2';
import Subtitleh3 from '../../../ComponentesAccesorios/Subtitles/Subtitleh3/Subtitleh3';
import LineSepar from '../../../ComponentesAccesorios/LineSepar/LineSepar';
import ContactoForm from '../../../ContactoForm/ContactoForm';
import PortadaSections from '../../../PortadaSections/PortadaSections';


function Gestion({titulo, textoServicio, subtitulo}) {
  return (
    <>
       <PortadaSections titlePortada={"Area de Gestion"} imagen={"/img/areagestion.jpeg"}/>
       
       <section className='Asesoria-Section-g'>
        <div className='Asesoria-detail-content'>
          
          <Subtitleh2 text={titulo}/>
          {subtitulo && <Subtitleh3 text={subtitulo} />}
          <Link className='link-Asesoria' to={`/gestion`}>Volver al Menu</Link>
          <LineSepar/>
          {textoServicio.map((texto, index) => (
        <p key={index}>{texto}</p>
      ))}
        </div>
        <ContactoForm/>
        </section>
    </>
  );
}

export default Gestion;
