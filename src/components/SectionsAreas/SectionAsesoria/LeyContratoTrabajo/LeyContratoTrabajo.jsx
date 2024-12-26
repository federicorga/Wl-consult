
import Asesorias from "../Asesorias/Asesorias";
function LeyContratoTrabajo() {
  const textos = [
    'La Ley de contrato de Trabajo -LCT- es un conjunto de normas jurídicas que regulan los derechos y obligaciones que surgen del vínculo laboral existente entre un trabajador y un empleador, cuya finalidad es igualar la balanza entre ambos, procurando reducir la posición dominante a la que se ve expuesto el empleado frente a eventuales arbitrariedades por parte del empleador.',
'Esta ley versa entre otras cosas sobre dos aspectos que son de especial interés para el emprendedor y las pequeñas y medianas empresas, que son: las indemnizaciones previstas cuando se proceda con un despido injustificado y el concepto de la responsabilidad solidaria en caso de que se pruebe la existencia de un fraude y/o simulación laboral generalmente enmascaradas bajo empresas de servicios eventuales y subcontratistas.',
'Aparte de la Ley de Contrato de Trabajo, existen otras tres leyes de especial interés para el emprendedor, que son la Ley Nacional de Empleo 240.13, la Ley 25.323 y la Ley anti-evasión 25.345 que comprenden severas multas para los casos de empleos no registrados conocidos mayormente como casos de “trabajo en negro”. Actualmente estas leyes se encuentran derogadas por el decreto 70/23 hasta que la Corte Suprema de Justicia se expida sobre la constitucionalidad de dicho decreto.',

  ];
  return (
    <>
      <Asesorias titulo="LEY DE CONTRATO DE TRABAJO 20.744" textoServicio={textos} />
    </>
  );
}

export default LeyContratoTrabajo;
