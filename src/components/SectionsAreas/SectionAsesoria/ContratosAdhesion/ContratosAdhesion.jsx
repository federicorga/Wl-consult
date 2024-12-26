
import Asesorias from "../Asesorias/Asesorias";
function ContratosAdhesion() {
  const textos = [
    'Los contrato de adhesión son contratos pre impresos en serie o en formularios con contenido general aplicable a cualquier consumidor. Se caracterizan por tener lugares en blanco para ingresar datos de la contraparte y contener clausulas generalmente abusivas, dando fácilmente lugar a discrepancias sobre su contenido e interpretación ya que la contraparte carece de posibilidad de discutir y/o negociar las cláusulas contractuales.',
    'En este tipo de contratos, al consumidor solo le queda la posibilidad de aceptar las condiciones impuestas unilateralmente por parte del ofertante del producto o servicio por lo que la Ley 24.240 de Defensa del Consumidor le infiere un especial tratamiento al concepto de los términos abusivos y clausulas ineficaces, refiriéndose a la interpretaciones de los contratos de adhesión determinando que se procederá a la declaración judicial de nulidad la cláusulas que desvirtúen la responsabilidad comercial empresaria, la inversión de la carga de prueba en perjuicio del consumidor y la restricción de sus derechos.',
    'A su vez la Ley de Defensa del Consumidor establece expresamente que la interpretación de los contratos de consumo se efectuara a favor del consumidor y la posibilidad de demandar la nulidad del contrato o de una cláusula especifica cuando se pruebe que la empresa omitió su deber de buena fe en las relaciones comerciales de consumo.',
  ];
  return (
    <>
      <Asesorias titulo="CONTRATO DE ADHESION" textoServicio={textos}/>
    </>
  );
}

export default ContratosAdhesion;
