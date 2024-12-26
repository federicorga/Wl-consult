import Gestion from "../Gestion/Gestion";
function InsolvenciaPatrimonial() {
  const textos = [
   
    'Los emprendimientos comerciales no están exentos del riesgo ser mal administrados y caer en vicios como adeudar pasivos mayores a sus activos. Dicha práctica puede derivar en una situación de insolvencia patrimonial frente a los acreedores de la empresa. Esto quiere decir que la organización debe más de lo que tiene y que -ante tal escenario- los acreedores procuraran asegurarse el cobro de lo adeudado llamando a dicho deudor a concurso preventivo. ',
    'Este esquema de insolvencia patrimonial está previsto en la Ley 24.522 que establece un procedimiento judicial con una variedad de recursos que permiten a las partes arribar a un acuerdo que evite la quiebra del deudor y asegure a su vez al acreedor el cobro de su crédito. ',
    'Si bien esta situación es lo último que una pequeña y/o mediana empresa desea experimentar, es importante que el empresario sepa que la misma no significa una calle sin salida, sino un momento que -debidamente asesorado y gestionado- es fácil de sortear y continuar con la actividad comercial de su emprendimiento. '
    

  ];

  return (
    <>
      <Gestion titulo={"Insolvencia Patrimonial"} textoServicio={textos}/>
    </>
  );
}

export default InsolvenciaPatrimonial;
