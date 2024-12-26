import "./SectionClientes.css"
import PortadaSections from "../PortadaSections/PortadaSections";
import Subtitleh2 from "../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2";
import LineSepar from "../ComponentesAccesorios/LineSepar/LineSepar";
import { Link } from "react-router-dom";

function SectionClientes() {
  return (
    <>
    <PortadaSections titlePortada={"CLIENTES"} imagen={"/img/clientesportada.jpg"} />
    <section className="section-noticias">
      <Subtitleh2 text={"NUESTROS CLIENTES"}/>
      <LineSepar/>

    <div >
    <p className='p-textoEstandar p-padding-inicio-text-obra p-margin-inicio-text-obra'> Gracias a todos ellos porque cada día confían en nosotros y en nuestros productos.</p>
        </div>
   
   <div className="content-all-Sectionclients">
   <Link className="link-cliente-sectionclientes"   to={''}>  <img src="/img/Clientes-img/Cliente1.png" alt="" /></Link>
   <Link className="link-cliente-sectionclientes"  to={''}><img src="/img/Clientes-img/Cliente2.png" alt="" /></Link>
   </div>

    </section>
    </>
  );
}

export default SectionClientes;
