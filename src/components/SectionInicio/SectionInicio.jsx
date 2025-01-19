import "./SectionInicio.css"
import Titles from "../ComponentesAccesorios/Titles/Titles";
import Subtitleh2 from "../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2";
import InfoServicio from "./InfoServicio/InfoServicio";
import Subtitleh3 from "../ComponentesAccesorios/Subtitles/Subtitleh3/Subtitleh3";
import BtnSection from "../BtnSection/BtnSection";
import Aos from "aos";
import { useEffect,useState} from "react";
import MiniLineSepar from "../ComponentesAccesorios/MiniLineSepar/MiniLineSepar";
import { scrollToTop } from "../../assets/main";
import { Link } from "react-router-dom";
import CardServicios from "../CardServicios/CardServicios";
import CarrouselGeneral from "../CarrouselGeneral/CarrouselGeneral";


//ARTICULOS
import { arrayArtic } from "../../assets/connectToJson";
import ArticuloCard from "../SectionContenidos/SectionNoticias/ArticuloCard/ArticuloCard";



const SectionInicio = () => {

  const AosData="flip-up";
  useEffect(() => {
    Aos.init({
      
      offset: -1300,
      duration: 800, // Duración de las animaciones en milisegundos
      easing: 'ease-in-out', // Tipo de easing (opcional)
      once: false, // Solo activar las animaciones una vez
      mirror:true,
      useClassNames: true,
      disableMutationObserver: true,
    });
  }, [AosData]);


  const [listasArticulos, setListaArticulos] = useState([]);

  useEffect(() => {
  
    const fetchArticulos = async () => {
      try {
    
        const lista= await arrayArtic;
        setListaArticulos(lista);
      
      } catch (error) {
        console.error("Error al obtener la lista de artículos:", error);
      }
    };

    // Llamar a la función para obtener los artículos
    fetchArticulos();
 
  }, []); // El segundo argumento [] asegura que el efecto se ejecute solo una vez, equivalente a componentDidMount

 

  return (
 <>
    <div className='fondoInicio'>
    <Titles fontSize="35px" textTitle={`Defendemos Tus Intereses, Impulsamos Tu Negocio`}/>
  
    </div>


    
    <div className="inicio-secA">
    <div className="content-banner-sectA">
    <Subtitleh2 text={"¿NECESITAS ESTAR TRANQUILO CON LA SITUACIÓN LEGAL DE TU EMPRESA O EMPRENDIMIENTO?"}></Subtitleh2>
    <Subtitleh3 text={"Podemos Acompañarte y Asesorarte en las distintas Alternativas"}></Subtitleh3>
    <div className="inicio-SecA-btnsect">
    <BtnSection titleBtn={"CONTACTANOS!"} url={"/contacto"}/>
    </div>
    </div>
    </div>






    <div className="inicio-secB">
    <Subtitleh2 clase={"edit-title-h2-secC"} text={"NUESTROS SERVICIOS"}/>
    <InfoServicio/>
    </div>

 
<div>
  <section className="box-services">
  <div data-aos="fade-right">
    <div className="box-asesoramiento-inicio">
      <div className="boxs-servicios-inicio-content">
        <h2>ASESORAMIENTO</h2>
        <p>Será asesorado sobre las tendencias jurídicas y legislativas relativas a las pequeñas y medianas empresas que orientaran la aplicación del derecho comercial tanto en el mercado local como en el mercado internacional.</p>
        <Link className="box-link-service" onClick={scrollToTop} to={'/asesoria-legal'}>
            <p>CONCE +</p>
            </Link>

      </div>
    </div>
    </div>
    <div data-aos="fade-left">
    <div className="box-gestion-inicio">
      <div className="boxs-servicios-inicio-content">
      <h2>GESTIÓN</h2>
        <p>La ejecución de un emprendimiento comercial puede ser una tarea demandante. También puede abarcar tareas y/o gestiones técnicas que debido a su complejidad jurídica puedan exceder al emprendedor o a la pequeña y mediana empresa.</p>
        <Link className="box-link-service" onClick={scrollToTop} to={'/gestion'}>
            <p>CONCE +</p>
            </Link>
      </div>
      
    </div>
    
    </div>
    

  </section>

</div>







    <div className="inicio-secC">
    <div data-aos="flip-left">
    <Subtitleh2 clase={"edit-title-h2-secC"} text={"¿Por que elegirnos?"} ></Subtitleh2>
    </div>
    <div className="content-inicio-p-sub-line-all">
      
    <div className="content-inicio-sub-lin" data-aos="fade-right">
      <Subtitleh2 text={"Superando Obstáculos"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text " data-aos="fade-up">Sabemos lo difícil que es animarse a emprender y crear empresas: los miedos y las expectativas, salir de la zona de confort y animarse a ofrecer productos y servicios que mejoren la calidad de vida de las personas, que ahorren tiempos de trabajo, que contribuyan al desarrollo de la sociedad. La incertidumbre que generan los procesos nuevos, aun los más positivos, pueden llegar a representar un factor de desgaste inicial de fuerzas que no debe cargar el emprendedor. Aquí es donde entra WL Consultora: ¡nos encanta iniciar empresas! Lo que generalmente es un factor de confusión para muchos emprendedores, es un factor de proceso de satisfacción para nuestra consultora.</p>
    </div>
    <div className="content-inicio-p-sub-line-all">
    <div className="content-inicio-sub-lin" data-aos="fade-right"
     >
      <Subtitleh2 text={"Adaptándonos al Futuro"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text" data-aos="fade-up">Entendemos al mundo de hoy como uno expuesto a procesos de automatización surgidos de nuevas tecnologías que reinventaran el mercado laboral existente, excluyendo a algunos y transformando las funciones de otros. Este proceso de adaptación a un nuevo mundo en constante desarrollo, significa una oportunidad de crear nuevas formas de ingresos patrimoniales que excedan la tradicional relación en dependencia y permitan fundar las bases de nuestro sello personal en el mundo.</p>
    </div>
    <div className="content-inicio-p-sub-line-all">
    <div className="content-inicio-sub-lin" data-aos="fade-right"
     >
      <Subtitleh2 text={"De la Idea al Impacto"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text" data-aos="fade-up">A la hora de materializar una idea en un proyecto, un proyecto en un negocio, y un negocio en una empresa que contribuirá a la sociedad y generará puestos de trabajo, cumpliendo un rol social fundamental en el desarrollo económico local, el empresario puede verse abrumado por una variedad de aspectos legales, contractuales y legislativos que amenacen su emprendimiento. Por eso debe contar con toda la información que nuestros profesionales de diversas ramas del conocimiento pueden brindar a través de la facilidad y comodidad que brindan las nuevas tecnologías en comunicaciones que se consolidaron en nuestro país durante la pandemia.</p>
    </div>
    <div className="content-inicio-p-sub-line-all">
    <div className="content-inicio-sub-lin" data-aos="fade-right"
     >
      <Subtitleh2 text={"Delegando para Enfocarse"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text" data-aos="fade-up">Si aun debidamente asesorado el emprendedor considera que debe enfocarse exclusivamente a su vocación, podrá dejar en nuestras manos la gestión relativa a la formalización jurídica de su empresa, esto es, la constitución legal de su proyecto en una sociedad registrada, la habilitación comercial de inmuebles, la confección y seguimiento de contratos civiles y comerciales, la transferencia de fondos de comercio y la gestión de las diligencias que los órganos administrativos de control requieren.</p>
    </div>
    <div className="content-inicio-p-sub-line-all">
    <div className="content-inicio-sub-lin" data-aos="fade-right">
      <Subtitleh2 text={"Visión Integral"}/>
      <MiniLineSepar/>
    </div>
    <p className="p-textoEstandar p-padding-inicio-text" data-aos="fade-up" >Resumiremos la visión de WL Consultora en la célebre frase del matemático Alfred North Whitehead: “La civilización avanza al aumentar el número de operaciones que podemos realizar sin tener que pensar en ellas”</p>
    </div>
  </div>


  <div className="inicio-SecNoticias">
      <CarrouselGeneral titleCarrousel="NOVEDADES" items={listasArticulos.slice(0, 5).map((articulo) => (
    <ArticuloCard ClassSizeArtCard={"size-artCard-inicio"} key={articulo.id} articulo={articulo} />
  ))}></CarrouselGeneral>
    </div>

    <div className="inicio-secD">
    <Subtitleh2 clase={"edit-title-h2-secC"} text={"Áreas de Práctica"} />
    

    <div data-aos="zoom-in">
      <div className="inicio-area-asesoria">

      <CarrouselGeneral titleCarrousel="ASESORAMIENTO"  items={[
           <Link className='link-articuloCard'  to={`/asesoria-legal/sociedad-comercial`} onClick={scrollToTop}>
           <CardServicios titulo={"Sociedades Comerciales"} img="Asesoramiento/sociedadComercial.jpg"/></Link>,
           <Link className='link-articuloCard'  to={`/asesoria-legal/relaciones-de-consumo`} onClick={scrollToTop}>
           <CardServicios titulo={"Relaciones de Consumo"} img="Asesoramiento/relacionesConsumo.webp"/></Link>,
           <Link className='link-articuloCard'  to={`/asesoria-legal/contratos-de-adhesion`} onClick={scrollToTop}>
           <CardServicios titulo={"Contratos de Adhesion"} img="Asesoramiento/contratosAderidos.jpg"/></Link>,
            <Link className='link-articuloCard'   to={`/asesoria-legal/ley-contrato-de-trabajo`} onClick={scrollToTop}>
            <CardServicios titulo={"Ley de Contrato de Trabajo"} img="Asesoramiento/leycontrattrabajo.jpg"/></Link>,
            <Link className='link-articuloCard'  to={`/asesoria-legal/derecho-laboral-colectivo`} onClick={scrollToTop}>
            <CardServicios titulo={"Derecho Laboral Colectivo"} img="Asesoramiento/derecholaboralColetivo.jpg"/></Link>,
            <Link className='link-articuloCard'  to={`/asesoria-legal/contratos-seguros`} onClick={scrollToTop}>
            <CardServicios titulo={"Contratos de Seguros"} img="Asesoramiento/contratoseguros.jpg"/></Link>,
            <Link className='link-articuloCard'   to={`/asesoria-legal/responsabilidad-penal-empresaria`} onClick={scrollToTop}>
            <CardServicios titulo={"Responsabilidad Penal Empresaria"} img="Asesoramiento/responsabilidadpenalempresarial.jpg"/></Link>,
            <Link className='link-articuloCard'  to={`/asesoria-legal/planificacion-del-transporte`} onClick={scrollToTop}>
            <CardServicios titulo={"Planificación del transporte"} img="Asesoramiento/plantransp.webp"/></Link> ,
            <Link className='link-articuloCard'  to={`/asesoria-legal/Incoterms`} onClick={scrollToTop}>
            <CardServicios titulo={"Contratos de comercio exterior"} img="Asesoramiento/comercio-exterior.jpg"/></Link>,
            <Link className='link-articuloCard'  to={`/asesoria-legal/riesgo-de-trabajo`} onClick={scrollToTop}>
            <CardServicios titulo={"Riesgos de Trabajo"} img="Asesoramiento/riesgoDeTrabajo.jpg"/></Link>,
            <Link className='link-articuloCard'   to={`/asesoria-legal/normas-iso9001`} onClick={scrollToTop}>
            <CardServicios titulo={"Normas ISO 9001"} img="Asesoramiento/normaiso9001.jpg"/></Link>,
            <Link className='link-articuloCard'  to={`/asesoria-legal/normas-iso45001`} onClick={scrollToTop}>
            <CardServicios titulo={"Normas ISO 45001"} img="Asesoramiento/normaiso45001.png"/></Link>

        ]}>

        </CarrouselGeneral>

  
    </div>
    </div>

  <div data-aos="zoom-in">
    <div className="inicio-area-gestion">

    <CarrouselGeneral titleCarrousel="GESTIÓN" items={[
       <Link className='link-articuloCard' to={`/gestion/constitucion-societaria`} onClick={scrollToTop}>
       <CardServicios titulo={"Constitucion Societaria"} img="Gestion/constitucionsocietaria.jpeg"/></Link>,
       <Link className='link-articuloCard' to={`/gestion/locacion-inmobiliaria`} onClick={scrollToTop}>
       <CardServicios titulo={"Locación Inmobiliaria"} img="Gestion/contratoinmobiliaria.jpg"/></Link>,
       <Link className='link-articuloCard' to={`/gestion/fondos-comercio`} onClick={scrollToTop}>
       <CardServicios titulo={"Fondos de Comercio"} img="Gestion/fondocomercio.webp"/></Link>,
       <Link className="link-articuloCard" to={`/gestion/registro-marca-patentes`} onClick={scrollToTop}>
     <CardServicios titulo={"Registros de Marcas y Patentes"} img="Gestion/marcaypatente.webp"></CardServicios></Link>,
       <Link className='link-articuloCard' to={`/gestion/habilitaciones`} onClick={scrollToTop}>
       <CardServicios titulo={"Habilitaciones"} img="Gestion/habilitaciones.jpg"/></Link>,
       <Link className='link-articuloCard' to={`/gestion/contratos-locacion-servicios`} onClick={scrollToTop}>
       <CardServicios titulo={"Contratos de Locación de Servicios"} img="Gestion/contratoservicios.jpg"/></Link>,
       <Link className='link-articuloCard' to={`/gestion/contratos-locacion-obra`} onClick={scrollToTop}>
       <CardServicios titulo={"Contratos de Locación de Obra"} img="Gestion/contratoobra.jpg"/></Link>,
       <Link className='link-articuloCard' to={`/gestion/insolvencia-patrimonial`} onClick={scrollToTop}>
       <CardServicios titulo={"Insolvencia patrimonial"} img="Gestion/insolvenciapatrimonial.jpg"/></Link>

    ]}></CarrouselGeneral>

   
    </div>
    </div>
    </div>

  
 
    </>
  );
}

export default SectionInicio;
