import Gestion from "../Gestion/Gestion";

function ContratoLocObra() {
  const textos = [
    'El contrato de locación de obra consiste en uno en donde una de las partes se compromete a la ejecución de una obra determinada y la otra parte se compromete a pagar un precio previamente establecido por dicha obra. Este tipo de contrato se utiliza generalmente para la materialización de obras de construcción como por ejemplo desarrollar calles, edificios, puentes, etc. Pero también puede comprender obras de carácter intelectual, como, por ejemplo, escribir un libro. ', 
    'Estos tipos de contrato presentan varios sistemas de fijación de precios a establecerse de antemano entre las partes, como por ejemplo el sistema de “ajuste alzado” en donde es el contratista quien provee los materiales a ser utilizados para la obra, o por “unidad de medida” en donde la obra se pacta por “piezas” debiendo designar previamente la cantidad total de las misma para incurrir en inconvenientes a futuro. También tenemos el sistema por “coste y costas” en donde la retribución se determina sobre el valor de los materiales, de la mano de obras y de otros gastos directos e indirectos. ',
    'Por último, lo que toda PYME debe saber de este este tipo de contrato es el concepto de la subcontratación, en donde el emprendedor debe conocer la totalidad de las obligaciones y responsabilidades que competen a la figura del contratista y subcontratista, las cuales deben necesariamente estar plasmadas en los contratos de locación de obras. '
    
  ];

  return (
    <>
      <Gestion titulo={"Contratos de Locacion de Obra"} textoServicio={textos}/>
    </>
  );
}

export default ContratoLocObra;
