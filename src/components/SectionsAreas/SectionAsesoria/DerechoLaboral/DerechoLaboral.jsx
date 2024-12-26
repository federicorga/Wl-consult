
import Asesorias from "../Asesorias/Asesorias";
function DerechoLaboral() {
  const textos = [
    'El derecho laboral colectivo, a diferencia del derecho laboral individual, comprende todo lo relativo a los conflictos colectivos que puedan surgir entre los trabajadores y el empleador y las medidas de acción directas que los primeros puedan ejercer y bajo que parámetros.',
    'Si bien la ley de PYMEs establece que para que una pequeña y mediana empresa sea denominada como tal, no debe contar con una planta que supere cuarenta (40) trabajadores permanentes, no la exime de esta pueda crecer y llegar al punto donde, justamente debido a este crecimiento organizacional, deba necesariamente conocer los aspectos técnicos que diferencian un gremio de un sindicato, y a su vez, deba conocer la diferencia entre un sindicato con personería gremial de un sindicato sin personería gremial. Tampoco puede desconocer los principios protectorios del derecho laboral colectivo en la representación sindical de los trabajadores de la empresa.',
    'A su vez, es importante interiorizar en el contenido de los Convenio Colectivos de Trabajos -CCT- vigentes relativos al rubro de explotación. La empresa deberá necesariamente adaptar las operaciones laborales a las condiciones establecidas en estos convenios, los cuales se caracterizan por ser superadoras de los lineamientos básicos expuestos en la Ley 20.744 de Contrato de Trabajo y los procedimientos establecidos para la solución de conflictos laborales colectivos.',
  ];
  return (
    <>
      <Asesorias titulo="DERECHO LABORAL" textoServicio={textos}/>
    </>
  );
}

export default DerechoLaboral;
