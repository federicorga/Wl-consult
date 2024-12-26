import Asesorias from "../Asesorias/Asesorias";

function NormaISO9001() {
    const textos = [
      'Las normas ISO son una herramienta y disposiciones que se emplean en empresas para garantizar que los productos y/o servicios ofrecidos por estas organizaciones cumplen con requisitos estandarizados de calidad. ISO significa “International Organization for Standardization” y consiste en un compendio de casi 20.000 normas internacionales que han sido adoptadas por las organizaciones de mayor prestigio a lo largo de todo el mundo. ',
      'Las normas ISO son de gran utilidad para la mejora de la calidad de las organizaciones y sirven como acreditación del cumplimiento de los objetivos de calidad de los productos y servicios comercializados. ',
      'Los estándares ISO actualmente cumplen la función de establecer los criterios que permiten implantar pautas de calidad a nivel internacional que contribuyen a consolidar un nivel de gestión que opera como garantía para obtener la confianza de los mercados. ',
      'Los numerosos beneficios de certificarse en Estándares Internacionales podemos resumirlos en la reducción de costos optimizando procesos y mejorando su productividad, en una supuesta garantía de satisfacción del cliente ya que este sabrá que producto o servicio se encuentra expuesto a procesos de mejoramientos constantes la calidad. ',
      'A su vez, las normas ISO suelen garantizar el acceso a nuevos mercados, ya que los clientes sabrían que se están cumpliendo los requisitos del comercio internacional y de grandes empresas, lo que supone una ventaja competitiva. ',
      
      
    ];
  return (
    <>
      <Asesorias titulo="NORMA ISO 9001 - CALIDAD" textoServicio={textos}/>
    </>
  );
}

export default NormaISO9001;
