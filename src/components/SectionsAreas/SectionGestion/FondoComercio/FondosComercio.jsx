
import Gestion from '../Gestion/Gestion';
function FondosComercio() {
  const textos = [
    ' El fondo de comercio es el conjunto de bienes materiales e inmateriales organizados para el ejercicio de una actividad comercial cuya transferencia se encuentra regulada por la Ley 11.867 sobre transmisiones de establecimientos comerciales. ',
    ' Los elementos materiales de un comercio son generalmente el local comercial, los bienes muebles que lo integran, maquinarias, mercaderías, etc. Los elementos inmateriales son el nombre comercial, el emblema del comercio, enseñas, el valor llave y los clientes, esto es, la demanda previamente determinada del producto o servicio que el comercio provea.',
    ' La cuestión de los elementos inmateriales que componen un fondo de comercio es particularmente importante a la hora de transferirlo, ya que también hay que considerar aspectos jurídicos especialmente relevantes como qué tipo de vínculo mantendrá el adquirente del local transferido según quien transfiera el fondo sea el locador (dueño) o locatario (inquilino) del inmueble: si el vendedor es locatario del local donde funcionar el fondo de comercio, debe también obtener la conformidad del locador para dar seguridad a la operación. ',
    ' A su vez, deben tenerse en cuenta los contratos de trabajo vigentes en caso de existir empleados que integren el fondo de comercio, debiéndose acordar previamente la continuación o no de las relaciones laborales vigentes con los empleados del vendedor. También, llegado el caso, al adquirente debe conocer los aspectos relativos a los derechos industriales relativos a los diseños, marcas y patentes que se desarrollen a partir de la actividad comercial. ',
    ' Por último, especial transcendencia adquiere el correcto procedimiento de la transferencia del fondo para que el mismo sea pueda ser efectivamente oponible a terceros y no solo entre las partes. Para que la transferencia sea ejecutada correctamente deben formalizarse aspectos técnicos como la presentación de nóminas de acreedores, la publicación de la transferencia, la oposición a la misma, y finalmente su correspondiente inscripción según competencia territorial. '
    
  ];

  return (
    <>
      <Gestion titulo={"Fondos de Comercio"} textoServicio={textos}/>
    </>
  );
}

export default FondosComercio;
