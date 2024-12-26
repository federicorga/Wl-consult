import "./SectionMedios.css"
import PortadaSections from '../../PortadaSections/PortadaSections';
import Subtitleh2 from '../../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2';
import LineSepar from '../../ComponentesAccesorios/LineSepar/LineSepar';
import Subtitleh3 from '../../ComponentesAccesorios/Subtitles/Subtitleh3/Subtitleh3';
function SectionMedios() {
  return (
    <>
    <PortadaSections titlePortada={"EN LOS MEDIOS"} imagen={"./img/enlosmedios.jpg"} />
    <section className="section-noticias">
      <Subtitleh2 text={"En los medios"}/>
      <LineSepar/>
   <div> 
    <div >
    <Subtitleh3 text={"Entrevista brindada al programa Vías Argentinas Radio"}></Subtitleh3>
    <p className='p-textoEstandar p-padding-inicio-text-obra p-margin-inicio-text-obra'>Entrevista brindada al programa “Vías Argentinas Radio” a través de su emisora Radio del Sur AM 1080 en octubre de 2024 donde se abarcaron temas de políticas públicas de transporte, el impacto de la ley bases y la difusión de la obra “Eficiencia y Rentabilidad de los Servicios Públicos: Análisis de los ferrocarriles metropolitanos a través del sistema de concesiones privadas” orientado a estudiantes de carreras afines al mundo del transporte y a funcionarios públicos del área.
    En la misma se comparan los objetivos procurados con la adopción del sistema de regulación tarifaria de las concesiones privadas del siglo pasado, esto es, regulación por control de rentabilidad, cuyo objetivo era no solo dicho control, sino también la captación de capitales para desarrollar y consolidar un mercado de transporte aun inexistente y del modelo de concesiones privadas adoptadas en los años 90, el cual procuró relanzar y modernizar un mercado de servicios ya establecido al reducir sus costos de explotación mediante un sistema tarifario de precios máximos.</p>
    <p className='p-textoEstandar p-padding-inicio-text-obra p-margin-inicio-text-obra'>De los objetivos procurados y resultados obtenidos de ambas experiencias privatizadoras, se analiza el rol del estado nacional y como sus expresiones legislativas impactan en el mercado de los servicios públicos, la función del sector privado en dicho mercado, los riesgos empresarios a asumir, las garantías que debe brindar el gobierno nacional, el estudio del comportamiento de los usuarios a través de análisis de demanda sectoriales, el trasfondo de la emergencia publica vigente y la ley bases en la aplicación de nuevos esquemas de concesión de servicios públicos de transporte ferroviario con sus potenciales aciertos y limitaciones.</p>
    </div>
    <div className='content-video1'>
    <iframe  className="video1" src="https://www.youtube.com/embed/2fJzUfIkO94?si=yEx4ekddWKCahMyQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    </div>  
    </section>
    </>
  );
}

export default SectionMedios;
