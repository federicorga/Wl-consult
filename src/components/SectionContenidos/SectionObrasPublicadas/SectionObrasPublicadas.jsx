import "./SectionObrasPublicadas.css"
import PortadaSections from '../../PortadaSections/PortadaSections';
import Subtitleh2 from '../../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2';
import LineSepar from '../../ComponentesAccesorios/LineSepar/LineSepar';
import Subtitleh3 from "../../ComponentesAccesorios/Subtitles/Subtitleh3/Subtitleh3";
import { Link } from "react-router-dom";

function SectionObrasPublicadas() {
  return (
    <>
    <PortadaSections titlePortada={"OBRAS PUBLICADAS"} imagen={"/img/obraspublicadas.jpg"} />
    <section className="section-noticias">
      <Subtitleh2 text={"Obras publicadas"}/>
      <LineSepar/>
    <div className="content-book-descr">
    <div className="content-book-text">
    <Subtitleh3 text={"Eficiencia Y Rentabilidad De Los Servicios Públicos"}></Subtitleh3>
    <p className='p-textoEstandar p-padding-inicio-text-obra p-margin-inicio-text-obra'>Esta obra investiga el impacto de la privatización en la eficiencia y rentabilidad del servicio público ferroviario. A través de un análisis exhaustivo que combina una revisión histórica con la evaluación de indicadores de calidad y sistemas tarifarios, el autor examina si la privatización cumplió con los objetivos propuestos por el Estado argentino en la década de 1990. El estudio ofrece una perspectiva crítica sobre la gestión ferroviaria, proponiendo mejoras en las políticas públicas para el futuro.</p>
    <Link to={'https://articulo.mercadolibre.com.ar/MLA-1454560189-eficiencia-y-rentabilidad-de-los-servicios-publicos-_JM'} target="_blank"><button className="btn-comprar-libro">COMPRAR AHORA</button></Link>
    <img className="disponible-articulo-eficiencia-ferro" src="/img/Obras-Publicadas/Disponible-en-libro1.png" alt="" />
    </div>
    <div className='content-book'>
    <img src="/img/Obras-Publicadas/libro-eficiencia-servicios-publicos.jpeg" alt="" />
    </div>
    </div>
    </section>
    </>
  );
}

export default SectionObrasPublicadas;
