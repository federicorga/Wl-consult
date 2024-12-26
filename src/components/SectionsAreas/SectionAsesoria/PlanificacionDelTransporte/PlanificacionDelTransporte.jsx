import Asesorias from "../Asesorias/Asesorias";
function PlanificacionDelTransporte() {
  const textos = [
    'Los proyectos de transporte, movilidad urbana y logística de cargas son de fundamental importancia en el entramado de las innovaciones producidas, lo cual ha influido de manera favorable en el aparato productivo nacional. Quien pretenda desarrollar una planificación comercial eficaz del transporte debe comprender la situación y el desempeño actual del sector, elaborar diagnósticos, interpretar indicadores e identificar el contexto y las tendencias del área, junto con los cambios en la oferta y la demanda.', 
'Con relación a la regulación del transporte, la pequeña y mediana empresa deberá necesariamente conocer los aspectos legales del transporte de carga y pasajeros según modo, los dispositivos de control, las sanciones regulatorias por incumplimiento, los alcances de la responsabilidad civil contractual y extracontractual, y las leyes nacionales, provinciales y municipales relativas a la materia.',
'A su vez, deberá conocer los sistemas de responsabilidad aplicables al contrato de transporte, esto es, la responsabilidad civil objetiva, la responsabilidad subjetiva y la responsabilidad solidaria. También deberá conocer los distintos tipos de seguros en transporte de mercaderías. Con relación al transporte marítimo, mayormente utilizado para operaciones de exportación e importación de productos, deberá conocer los múltiples y complejos modos de transmisión de responsabilidades entre vendedor y comprador. '

    
  ];
  return (
    <>
      <Asesorias titulo="PLANIFICACIÓN DEL TRANSPORTE" textoServicio={textos} subtitulo={""}/>
    </>
  );
}

export default PlanificacionDelTransporte;
