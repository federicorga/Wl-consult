import './SectionAsesoria.css'
import PortadaSections from '../../PortadaSections/PortadaSections';
import CardServicios from '../../CardServicios/CardServicios';
import { Link } from 'react-router-dom';
import LineSepar from '../../ComponentesAccesorios/LineSepar/LineSepar';
import Subtitleh2 from '../../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2';
import Subtitleh3 from '../../ComponentesAccesorios/Subtitles/Subtitleh3/Subtitleh3';
import { scrollToTop } from '../../../assets/main';

const SectionAsesoria = () => {

  return (
    <>
 <PortadaSections titlePortada={"Asesoria Legal"} imagen={"/img/areaasesoria.jpg"}/>

 
 <section className='section-contain-Asesoria-all'>
 <section className="section-Asesoria" >
      <Subtitleh2 text={"NUESTROS SERVICIOS DE ASESORIA"}/>
      <div className='tamlinasesor' id="Ases">
      <LineSepar/>
      </div>
        <div className="section-texts">
          <Subtitleh3 text={"Consolidando el éxito empresarial: el rol del conocimiento y asesoramiento legal en PYMES​"}/>
      <p className='p-textoEstandar p-padding-inicio-text-obra'>El conocimiento es poder” fue una frase inmortalizada por el filósofo Francis Bacon y es uno de los conceptos fundamentales que sostiene WL Consultora. Efectivamente, el conocimiento es el pilar fundamental de cualquier emprendimiento que pretenda desarrollarse con éxito y dejar su marca personal.</p>
      <p className='p-textoEstandar p-padding-inicio-text-obra'>Las pequeñas y medianas empresas deben necesariamente contar con toda la información legal sobre los derechos y las obligaciones -y oportunidades- que la legislación local expone al empresariado emergente.</p>
      <p className='p-textoEstandar p-padding-inicio-text-obra'>Munido con toda la información que necesita saber para anticipar cualquier contratiempo que el marco legal vigente pueda prever en el exitoso desenvolvimiento de su actividad, el emprendedor tomara las decisiones correctas que llevaran su visión a buen puerto.</p>
      <p className='p-textoEstandar p-padding-inicio-text-obra'>A su vez, será asesorado sobre las tendencias jurídicas y legislativas relativas a las pequeñas y medianas empresas que orientaran la aplicación del derecho comercial tanto en el mercado local como en el mercado internacional.</p>
        </div>
      </section>
 <section className='Seccion-CardsServicios'>
    <div className='group-Card'>
    <Link className='link-articuloCard'  to={`/asesoria-legal/sociedad-comercial`} onClick={scrollToTop}>
    <CardServicios titulo={"Sociedades Comerciales"} img="Asesoramiento/sociedadComercial.jpg"/></Link>
    <Link className='link-articuloCard'  to={`/asesoria-legal/relaciones-de-consumo`} onClick={scrollToTop}>
    <CardServicios titulo={"Relaciones de Consumo"} img="Asesoramiento/relacionesConsumo.webp"/></Link>
    <Link className='link-articuloCard'  to={`/asesoria-legal/contratos-de-adhesion`} onClick={scrollToTop}>
    <CardServicios titulo={"Contratos de Adhesion"} img="Asesoramiento/contratosAderidos.jpg"/></Link>
    <Link className='link-articuloCard'   to={`/asesoria-legal/ley-contrato-de-trabajo`} onClick={scrollToTop}>
    <CardServicios titulo={"Ley de Contrato de Trabajo"} img="Asesoramiento/leycontrattrabajo.jpg"/></Link>
    </div>
    <div className='group-Card'>
    <Link className='link-articuloCard'  to={`/asesoria-legal/derecho-laboral-colectivo`} onClick={scrollToTop}>
    <CardServicios titulo={"Derecho Laboral Colectivo"} img="Asesoramiento/derecholaboralColetivo.jpg"/></Link>
    <Link className='link-articuloCard'  to={`/asesoria-legal/riesgo-de-trabajo`} onClick={scrollToTop}>
    <CardServicios titulo={"Riesgos de Trabajo"} img="Asesoramiento/riesgoDeTrabajo.jpg"/></Link>
    <Link className='link-articuloCard'  to={`/asesoria-legal/contratos-seguros`} onClick={scrollToTop}>
    <CardServicios titulo={"Contratos de Seguros"} img="Asesoramiento/contratoseguros.jpg"/></Link>
    <Link className='link-articuloCard'   to={`/asesoria-legal/responsabilidad-penal-empresaria`} onClick={scrollToTop}>
    <CardServicios titulo={"Responsabilidad Penal Empresaria"} img="Asesoramiento/responsabilidadpenalempresarial.jpg"/></Link>
    </div>
    <div className='group-Card'>
    <Link className='link-articuloCard'   to={`/asesoria-legal/normas-iso9001`} onClick={scrollToTop}>
    <CardServicios titulo={"Normas ISO 9001"} img="Asesoramiento/normaiso9001.jpg"/></Link>
    <Link className='link-articuloCard'  to={`/asesoria-legal/normas-iso45001`} onClick={scrollToTop}>
    <CardServicios titulo={"Normas ISO 45001"} img="Asesoramiento/normaiso45001.png"/></Link>
    <Link className='link-articuloCard'  to={`/asesoria-legal/planificacion-del-transporte`} onClick={scrollToTop}>
    <CardServicios titulo={"Planificación del transporte"} img="Asesoramiento/plantransp.webp"/></Link> 
    <Link className='link-articuloCard'  to={`/asesoria-legal/Incoterms`} onClick={scrollToTop}>
    <CardServicios titulo={"Contratos de comercio exterior"} img="Asesoramiento/comercio-exterior.jpg"/></Link> 
    </div>
  
    </section>
    </section>
    </>
  );
}

export default SectionAsesoria;
