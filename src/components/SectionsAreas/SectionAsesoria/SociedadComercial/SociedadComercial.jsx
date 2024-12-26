
import Asesorias from "../Asesorias/Asesorias";
function SociedadComercial() {
  const textos = [
    'Una sociedad comercial es cuando dos o más personas deciden aportar dinero u otros efectos de valor patrimonial para desarrollar un producto o servicio. A su vez, una vez constituida la sociedad, los socios son acreedores de los beneficios de la actividad comercial en porcentajes previamente establecidos.',
    'Lo que toda PYME, emprendedor o socio inversor de cualquiera de los dos primeros debe saber es que en el contenido del contrato societario se estipulan previa y detalladamente las condiciones de distribución de ganancias.',
    'También debe saber que uno de los beneficios principales de integrar una sociedad comercial es que, así como las ganancias son generalmente proporcionales al patrimonio invertido, también lo son las perdidas, debiendo soportar éstas últimas única y exclusivamente hasta el capital ingresado inicialmente, contando con la seguridad jurídica de excluir su patrimonio personal de cualquier riesgo comercial con el social, esto es, con el depositado a favor de la sociedad.',
    'Para reforzar esta seguridad, tanto el acta constitutivo inicial como sus modificaciones, deben hacer por escrito, ya sea por instrumento privado o público, en cuyo caso deberá darse la intervención de un escribano. A su vez, el instrumento constitutivo debe ser publicado en el Boletín Oficial y posteriormente registrado en la Inspección General de Justicia.' 
    
  ];
  return (
    <>
      <Asesorias titulo="SOCIEDADES COMERCIALES" textoServicio={textos}/>
    </>
  );
}

export default SociedadComercial;
