import './Asesoria.css'
import PortadaSections from '../../../PortadaSections/PortadaSections';
import ContactoForm from '../../../ContactoForm/ContactoForm';
import LineSepar from '../../../ComponentesAccesorios/LineSepar/LineSepar';
import Subtitleh2 from '../../../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2';
import { Link } from 'react-router-dom';
import Subtitleh3 from '../../../ComponentesAccesorios/Subtitles/Subtitleh3/Subtitleh3';


function Asesorias({titulo, textoServicio, subtitulo}) {
  return (
    <>
       <PortadaSections titlePortada={"Asesoria Legal"} imagen={"https://www.diariosigloxxi.com/multimedia/images/img_4a3f1239125d0dbafebe54d7c78d65f4.jpg"}/>
       
       <section className='Asesoria-Section-g'>
        <div className='Asesoria-detail-content'>
          
          <Subtitleh2 text={titulo}/>
          {subtitulo && <Subtitleh3 text={subtitulo} />}
          <Link className='link-Asesoria' to={`/asesoria-legal#Ases`}>Volver al Menu</Link>
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

export default Asesorias;
