import Asesorias from "../Asesorias/Asesorias";

function ResponsabilidadPenal() {
    const textos = [
      'La Ley de Responsabilidad Penal de las Personas Jurídicas, en vigencia desde el primero de marzo de 2018, tiene por objetivo luchar contra la corrupción a través de políticas preventivas eficaces y la generación de incentivos para que las personas jurídicas implementen programas de integridad y cooperen con las autoridades en casos de corrupción. ',
      'En ese marco, la oficina anticorrupción del Ministerio de Justicia elaboró los “Lineamientos de Integridad para el Mejor Cumplimiento de lo establecido en los artículos 22 y 23 de la Ley N° 27.401 de Responsabilidad Penal de Personas Jurídicas” (aprobados por Resolución N° 27/2018). Los Lineamientos brindan una guía técnica para el diseño, la implementación y la autoevaluación de programas de integridad, y están dirigidos a las empresas y otras personas jurídicas, a las organizaciones de la sociedad civil, las agencias estatales, los operadores del sistema de justicia y la comunidad profesional experta. ',
      'También se hizo una Guía complementaria para la implementación de programas de integridad en Pequeñas y Medianas Empresas (PyMEs), la cual constituye un paquete de herramientas que busca brindar a esas empresas consejos e instrumentos prácticos para que puedan analizar en qué medida cuentan con programas de integridad adecuados con relación a sus riesgos, dimensión y capacidad económica; o bien para que incorporen programas nuevos o mejoren los existentes. ',
      


    ];
  return (
    <>
      <Asesorias titulo="LEY 27.401 - RESPONSABILIDAD PENAL EMPRESARIA" textoServicio={textos} />
  
    </>
  );
}


export default ResponsabilidadPenal;
