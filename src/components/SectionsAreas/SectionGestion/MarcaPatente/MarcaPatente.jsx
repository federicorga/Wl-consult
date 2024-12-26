
import Gestion from "../Gestion/Gestion";
function MarcaPatente() {
  
    const textos = [
        'Un emprendimiento desarrollado correctamente puede derivar en la generación de un sello personal en la producción de bienes o servicios que representa una marca distintiva que diferencia el producto del emprendedor de los que puedan brindar otras personas y/o pequeñas y medianas empresas. ',
        'Dicha cualidad especial puede ser registrada en el Instituto Nacional de Propiedad Industrial -INPI- y brindar a la empresa que la inscriba la propiedad intelectual de la misma, permitiendo a dicho emprendedor limitar la utilización y comercialización de la marca registrada por parte de terceros sin el correspondiente requerimiento de autorización. ',
        'Actualmente la gestión del registros de marcas y patentes demora aproximadamente dos años y tiene una vigencia de diez años. ',
        'Es común que una pequeña y mediana empresa pretenda inscribir una marca similar a otra ya registrada, por lo cual, antes de iniciar una inscripción, es menester conocer fehacientemente la Ley 22.362 de Marcas para desarrollar una correcta gestión del trámite de inscripción de la marca que se quiera registrar. '
    ];

    return (
      <>
        <Gestion titulo={"Registros de Marcas y patentes"} textoServicio={textos}/>
      </>
    );
}

export default MarcaPatente;
