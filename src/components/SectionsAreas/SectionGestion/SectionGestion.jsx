import PortadaSections from "../../PortadaSections/PortadaSections";
import "./SectionGestion.css"
import { scrollToTop } from "../../../assets/main";
import { Link } from "react-router-dom";
import CardServicios from "../../CardServicios/CardServicios";
import LineSepar from "../../ComponentesAccesorios/LineSepar/LineSepar";
import Subtitleh2 from "../../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2";
import Subtitleh3 from "../../ComponentesAccesorios/Subtitles/Subtitleh3/Subtitleh3";
function SectionGestion() {
  return (
    <>
      <PortadaSections titlePortada={"Gestión"} imagen={"https://europadigital.es/wp-content/uploads/2021/10/Abogados-para-empresas.jpeg"}/>
  
  <section className="section-contain-Gestion-all">
  <section className="section-Gestion" >
    <Subtitleh2 text={"NUESTROS SERVICIOS DE GESTIÓN"}/>
    <div className='tamlinasesor' id="Ases">
    <LineSepar/>
    </div>
    <div className="section-texts">
      <Subtitleh3 text={"Optimizando la Gestión Empresarial: Enfoque Estratégico y Eficiencia Operativa​​"}/>
    <p className='p-textoEstandar p-padding-inicio-text-obra'>La ejecución de un emprendimiento comercial puede ser una tarea demandante. También puede abarcar tareas y/o gestiones técnicas que debido a su complejidad jurídica puedan exceder al emprendedor o a la pequeña y mediana empresa.</p>
    <p className='p-textoEstandar p-padding-inicio-text-obra'>La acumulación de actividades y responsabilidades puede atentar contra el empresario y contra el correcto desarrollo de la actividad comercial a desenvolver, minimizando así sus posibilidades de crecimiento e impacto social.</p>
    <p className='p-textoEstandar p-padding-inicio-text-obra'>El emprendedor debe necesariamente ocuparse con exclusividad al producto y al servicio que pretende introducir al mercado, sin incurrir en la pérdida de su valioso tiempo en actividades que representen sacar su atención del foco comercial de su emprendimiento.</p>
    <p className='p-textoEstandar p-padding-inicio-text-obra'>El poeta Carl Sandburg define otro de los conceptos fundamentales que sostiene WLConsultora: “El tiempo es la divisa de tu vida. Es la única divisa que tienes, y solo tú puedes determinar cómo será gastada.”</p>
      </div>
  </section>
  <section className='Seccion-CardsServicios2'>
  <div className='group-Card'>
    <Link className='link-articuloCard' to={`/gestion/constitucion-societaria`} onClick={scrollToTop}>
    <CardServicios titulo={"Constitucion Societaria"} img="Gestion/constitucionsocietaria.jpeg"/></Link>
    <Link className='link-articuloCard' to={`/gestion/locacion-inmobiliaria`} onClick={scrollToTop}>
    <CardServicios titulo={"Locación Inmobiliaria"} img="Gestion/contratoinmobiliaria.jpg"/></Link>
    <Link className='link-articuloCard' to={`/gestion/fondos-comercio`} onClick={scrollToTop}>
    <CardServicios titulo={"Fondos de Comercio"} img="Gestion/fondocomercio.webp"/></Link>
    <Link className="link-articuloCard" to={`/gestion/registro-marca-patentes`} onClick={scrollToTop}>
    <CardServicios titulo={"Registros de Marcas y Patentes"} img="Gestion/marcaypatente.webp"></CardServicios></Link>
    </div>
    <div className='group-Card'>
    <Link className='link-articuloCard' to={`/gestion/habilitaciones`} onClick={scrollToTop}>
    <CardServicios titulo={"Habilitaciones"} img="Gestion/habilitaciones.jpg"/></Link>
    <Link className='link-articuloCard' to={`/gestion/contratos-locacion-servicios`} onClick={scrollToTop}>
    <CardServicios titulo={"Contratos de Locación de Servicios"} img="Gestion/contratoservicios.jpg"/></Link>
    <Link className='link-articuloCard' to={`/gestion/contratos-locacion-obra`} onClick={scrollToTop}>
    <CardServicios titulo={"Contratos de Locación de Obra"} img="Gestion/contratoobra.jpg"/></Link>
    <Link className='link-articuloCard' to={`/gestion/insolvencia-patrimonial`} onClick={scrollToTop}>
    <CardServicios titulo={"Insolvencia patrimonial"} img="Gestion/insolvenciapatrimonial.jpg"/></Link>
    </div>

  </section>
  </section>
    </>
   
  );
}

export default SectionGestion;
