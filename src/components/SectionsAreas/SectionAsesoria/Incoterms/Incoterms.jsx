
import Asesorias from "../Asesorias/Asesorias";
function Incoterms() {
  const textos = [
    'Si bien WLConsultora se concentra en el asesoramiento jurídico a empresas y emprendedores locales, no puede desconocer el impacto que el comercio exterior ejerce sobre el mercado interno. Tampoco puede desconocer las posibilidades de crecimiento que pueda tener un plan de negocios en donde -correctamente desarrollado- pueda llegar a ser éste quien efectivamente ejerza un impacto sobre el mercado internacional. ',
    'Pero para llegar a tal punto deberá conocer los conceptos comerciales que regulan los derechos y obligaciones de vendedores y compradores en operaciones de importaciones y exportaciones, como por ejemplo en qué lugar y en qué momento se produce la transferencia de riesgos que pesa sobre la mercadería transportada, sobre quien recae la responsabilidad de contratar los correspondientes seguros contra riesgos más los gastos del transporte y que tipo de documentación tienen la responsabilidad de tramitar cada una de las partes. ',
    'Estos derechos y obligaciones están comprendidos en reglas establecidas por la Cámara de Comercio Internacional que especifican los riesgos y responsabilidades surgidas de operaciones comerciales con agentes establecidos en el exterior definidas en siglas denominadas INCOTERMS, que significa la abreviación de “International Commerce Terms.',
    
  ];
  return (
    <>
      <Asesorias titulo="INCOTERMS" textoServicio={textos} subtitulo={"Asesoría sobre contratos de comercio exterior en operaciones de importación/exportación"}/>
    </>
  );
}

export default Incoterms;
