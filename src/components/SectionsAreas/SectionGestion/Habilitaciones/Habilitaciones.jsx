import Gestion from "../Gestion/Gestion";


function Habilitaciones() {
  const textos = [  
    ' Si bien cada comercio e industria tiene sus particularidades, todo emprendedor que desee comenzar una pequeña o mediana empresa debe conocer los requisitos básicos de habilitación que cada municipio de la provincia le pedirá tanto en lo relativo a la acreditación de su identidad o de la sociedad comercial que integre como en lo relativo al inmueble en donde decida desarrollar su producto o servicio. ', 
    ' Con relación a la identidad del solicitante generalmente los municipios requerirán dicha acreditación a través del Documento Único de Identidad y constancia de domicilio. En el caso de que sea una sociedad comercial quien solicite el permiso de habilitación, también deberá facilitar una copia del acta constitutiva. Por último, si el solicitante desea gestionar el trámite de habilitación a través de un mandatario, deberá presentar una fotocopia del poder de representación. ',
    ' Con relación a la habilitación comercial del inmueble, el solicitante deberá legitimar su derecho al uso del lugar a través de una escritura notarial que acredite su titularidad de propiedad. En el caso de que el solicitante no sea el titular de dominio del inmueble, deberá facilitar a la municipalidad una copia del contrato de locación vigente con sellado fiscal. ',
    ' A la hora de habilitar un inmueble para su explotación comercial, se requieren satisfacer una multiplicidad de requerimientos adicionales a los ya expuestos. Lo enumerado previamente consiste en una exposición de los requisitos de carácter más básicos que cualquier órgano habilitador solicitara, ya sea la ciudad autónoma de Buenos Aires o un municipio de la provincia. '
    
  ];
  return (
    <>
      <Gestion titulo={"Habilitaciones"} textoServicio={textos} subtitulo={"Normativa vigente sobre la registración de tu empresa."}/>
    </>
  );
}

export default Habilitaciones;
