
import Gestion from "../Gestion/Gestion";
function LocacionInmobiliaria() {
  
    const textos = [
      ' Uno de los primeros contratos que una PYME celebrara será uno de locación, esto es, uno de alquiler cuyo objeto recaerá sobre un inmueble comercial en donde desarrollara u ofertara sus productos o servicios. ', 
'El contrato de locación, a su vez, será uno de los primeros que el órgano habilitante requerirá del emprendedor a la hora de abrir su comercio, ya sea en la ciudad autónoma de buenos aires o en la provincia. ',
'Es por eso que quien celebre estos contratos debe necesariamente conocer las implicancias que dicho instrumento significa para las partes en relación a los derechos y obligaciones a contraer, así como las múltiples formas de concluir y/o rescindir unilateralmente los contratos de locación. ',
' El comerciante debe conocer que un contrato de locación significa para el locador -esto es, el dueño de inmueble- un deber de responder tanto por vicios redhibitorios, que son defectos graves del inmueble que impidan la correcta instrumentación de su finalidad, como por evicción, que significa una turbación al derecho adquirido del inquilino surgido de dicho contrato.',

    ];

    return (
      <>
        <Gestion titulo={"Locacion Inmobiliaria"} textoServicio={textos}/>
      </>
    );
}

export default LocacionInmobiliaria;
