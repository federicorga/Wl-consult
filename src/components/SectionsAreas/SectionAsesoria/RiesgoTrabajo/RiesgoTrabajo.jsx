
import Asesorias from "../Asesorias/Asesorias";
function RiesgoTrabajo() {
  const textos = [
    'Cuando la actividad de la PYME conlleve algún riesgo en su ejecución, ésta debe asegurar responsablemente la seguridad de las operaciones laborales que asegure a sus empleados el desarrollo de sus actividades bajo riesgos debidamente anticipados y debidamente contenidos. ',
    'La Ley de Riesgos de Trabajos -LRT- se establece bajo un esquema de responsabilidad que compele al empleador a contratar un seguro de carácter obligatorio especializado en riesgos de trabajo llamadas Aseguradoras de Riesgos de Trabajo -ARTs-.',
    'El objetivo principal de estas aseguradoras es prevenir la siniestralidad laboral disminuyendo los factores de riesgo propios de la activad asegurada a través de la adopción de medidas de seguridad e higiene y prestaciones médicas previas a la ocurrencia de cualquier evento riesgoso. ',
    'Ahora, si dicho evento efectivamente ocurriese a pesar de la implementación de las medidas preventivas, no solo se procurara resarcir el daño ocasionado, sino que también será requerido la cobertura de todas las prestaciones médicas que la situación demande, así como también la rehabilitación integral del trabajador y su reinserción a su puesto de trabajo. ',
    
  ];
  return (
    <>
      <Asesorias titulo="RIESGO DE TRABAJO" textoServicio={textos}/>
    </>
  );
}

export default RiesgoTrabajo;
