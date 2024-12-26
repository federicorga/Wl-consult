import Asesorias from "../Asesorias/Asesorias";
function RelacionesConsumo() {
  const textos = [
    'Una de las relaciones más predominantes dentro del derecho comercial y el ejercicio del emprender son las relaciones de consumo, las cuales constituyen el vínculo jurídico entre un proveedor de bienes o servicios y un consumidor o usuario.',
    'En el año 1993 fue sancionada la Ley 24.240 de Defensa de Consumidor con la finalidad de proteger y defender los derechos de los consumidores y usuarios. Al año siguiente, en 1994, estos derechos alcanzaron especial protección al ser incluidos en el artículo 42 de la Constitución Nacional. Estas normas surgen como una forma de subsanar la desigualdad que existe en la relación comercial entre consumidor y el proveedor de productos o servicios.',
    'La ley 24.240 se encarga de regular todas estas cuestiones, brindando protección y garantías a los consumidores frente a fallas de calidad, riesgos contra la salud, publicidad engañosa, clausulas ineficaces, términos abusivos de los contratos, formas de prestar los servicios. A su vez, especial relevancia se establece en el articulo 3 de la Ley que establece un principio protectorio denominado “In dubio pro reo”, lo que establece -en caso de duda- una presunción a favor del consumidor.',
    'Entre los derecho y obligaciones mas importantes que introdujo la ley a las relaciones de consumo se encuentran las relativas al acceso gratuito de información sobre el producto, las sanciones por incumplimiento de la obligaciones surgidas de la oferta del servicio brindado, los plazos de garantías, los modos de rescisión de la prestación, la responsabilidad civil por daños surgidos de la oferta.',
    'La ley establece un procedimiento que debe arbitrar la autoridad de aplicación en caso de infracciones a las protecciones dispuestas en la misma. Se tratan de actuaciones administrativas y acciones judiciales que puede iniciar de oficio quien denuncié la lesión de un derecho surgido de una relación de consumo, un interés particular, o quien actué en defensa de interés generales de los consumidores en plazos de prescripción que todo emprendedor debe conocer.', 
    
  ];
  return (
    <>
      <Asesorias titulo="RELACIONES DE CONSUMO" textoServicio={textos} subtitulo={"Protección al consumidor"}/>
    </>
  );
}

export default RelacionesConsumo;
