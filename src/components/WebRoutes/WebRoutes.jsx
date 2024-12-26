

import { Routes, Route } from 'react-router-dom';

//Componnents

import NavBar from '../NavBar/NavBar';
import SectionFooter from '../SectionFooter/SectionFooter';
import SectionInicio from '../SectionInicio/SectionInicio';
import SectionAsesoria from '../SectionsAreas/SectionAsesoria/SectionAsesoria';
import SectionMiembros from '../SectionMiembros/SectionMiembros';
import SectionGestion from '../SectionsAreas/SectionGestion/SectionGestion';
import SectionContact from '../SectionContact/SectionContact';
import SectionFAQ from '../SectionFAQ/SectionFAQ';


//AREA DE CONTENIDOS
import SectionNoticias from '../SectionContenidos/SectionNoticias/SectionNoticias';
import SectionMedios from '../SectionContenidos/SectionMedios/SectionMedios';

//AREA DE ASESORIA
import DetailArticuloContainer from '../SectionContenidos/SectionNoticias/DetailArticuloContainer/DetailArticuloContainer';
import ContratosAdhesion from '../SectionsAreas/SectionAsesoria/ContratosAdhesion/ContratosAdhesion';
import SociedadComercial from '../SectionsAreas/SectionAsesoria/SociedadComercial/SociedadComercial';
import RelacionesConsumo from '../SectionsAreas/SectionAsesoria/RelacionesConsumo/RelacionesConsumo';
import LeyContratoTrabajo from '../SectionsAreas/SectionAsesoria/LeyContratoTrabajo/LeyContratoTrabajo';
import DerechoLaboral from '../SectionsAreas/SectionAsesoria/DerechoLaboral/DerechoLaboral';
import RiesgoTrabajo from '../SectionsAreas/SectionAsesoria/RiesgoTrabajo/RiesgoTrabajo';
import ContratoSeguros from '../SectionsAreas/SectionAsesoria/ContratoSeguros/ContratoSeguros';
import ResponsabilidadPenal from '../SectionsAreas/SectionAsesoria/ResponsabilidadPenal/ResponsabilidadPenal'
import NormaISO9001 from '../SectionsAreas/SectionAsesoria/NormasIso/NormaISO9001';
import NormaISO45001 from '../SectionsAreas/SectionAsesoria/NormasIso/NormaISO45001';

//AREA DE GESTION
import ConstitucionSocietaria from '../SectionsAreas/SectionGestion/ConstitucionSocietaria/ConstitucionSocietaria';
import ContratoLocObra from '../SectionsAreas/SectionGestion/ContratoLocObra/ContratoLocObra';
import ContratoLocServicios from '../SectionsAreas/SectionGestion/ContratoLocServicios/ContratoLocServicios';
import FondosComercio from '../SectionsAreas/SectionGestion/FondoComercio/FondosComercio';
import Habilitaciones from '../SectionsAreas/SectionGestion/Habilitaciones/Habilitaciones';
import LocacionInmobiliaria from '../SectionsAreas/SectionGestion/LocacionInmobiliaria/LocacionInmobiliaria';
import WhatsappAccesor from '../WhatsappAccesor/WhatsappAccesor';
import PlanificacionDelTransporte from '../SectionsAreas/SectionAsesoria/PlanificacionDelTransporte/PlanificacionDelTransporte';
import Incoterms from '../SectionsAreas/SectionAsesoria/Incoterms/Incoterms';
import InsolvenciaPatrimonial from '../SectionsAreas/SectionGestion/InsolvenciaPatrimonial/InsolvenciaPatrimonial';
import MarcaPatente from '../SectionsAreas/SectionGestion/MarcaPatente/MarcaPatente';
import SectionObrasPublicadas from '../SectionContenidos/SectionObrasPublicadas/SectionObrasPublicadas';
import SectionClientes from '../SectionClientes/SectionClientes';






function WebRoutes() {

    console.log("WebRoutes se está montando");
  return (
   <> 

   
    <WhatsappAccesor/>
     <NavBar />
    <Routes>
  
    <Route path='/' element={<SectionInicio/>}/>

    {/*Contenidos*/}
    <Route path='/noticias' element={<SectionNoticias/>}/>
    <Route path='/noticias/articulo/:id' element={ <DetailArticuloContainer/>}/>
    <Route path='/en-los-medios' element={<SectionMedios/>}/>
    <Route path='/obras-publicadas' element={<SectionObrasPublicadas/>}/>

    {/*Asesoria*/}
    <Route path='/asesoria-legal' element={<SectionAsesoria/>}/>
    <Route path='/asesoria-legal/sociedad-comercial' element={<SociedadComercial/>}/>
    <Route path='/asesoria-legal/relaciones-de-consumo' element={<RelacionesConsumo/>}/>
    <Route path='/asesoria-legal/contratos-de-adhesion' element={<ContratosAdhesion/>}/>
    <Route path='/asesoria-legal/ley-contrato-de-trabajo' element={<LeyContratoTrabajo/>}/>
    <Route path='/asesoria-legal/derecho-laboral-colectivo' element={<DerechoLaboral/>}/>
    <Route path='/asesoria-legal/riesgo-de-trabajo' element={<RiesgoTrabajo/>}/>
    <Route path='/asesoria-legal/responsabilidad-penal-empresaria' element={<ResponsabilidadPenal/>}/>
    <Route path='/asesoria-legal/contratos-seguros' element={<ContratoSeguros/>}/>
    <Route path='/asesoria-legal/normas-iso9001' element={<NormaISO9001/>}/>
    <Route path='/asesoria-legal/normas-iso45001' element={<NormaISO45001/>}/>
    <Route path='/asesoria-legal/planificacion-del-transporte' element={<PlanificacionDelTransporte/>}/>
    <Route path='/asesoria-legal/Incoterms' element={<Incoterms/>}/>

    {/*Gestion*/}
    <Route path='/gestion/registro-marca-patentes' element={<MarcaPatente/>}/>
    <Route path='/gestion/constitucion-societaria' element={<ConstitucionSocietaria/>}/>
    <Route path='/gestion/contratos-locacion-obra' element={<ContratoLocObra/>}/>
    <Route path='/gestion/contratos-locacion-servicios' element={<ContratoLocServicios/>}/>
    <Route path='/gestion/fondos-comercio' element={<FondosComercio/>}/>
    <Route path='/gestion/habilitaciones' element={<Habilitaciones/>}/>
    <Route path='/gestion/locacion-inmobiliaria' element={<LocacionInmobiliaria/>}/>
    <Route path='/gestion/insolvencia-patrimonial' element={<InsolvenciaPatrimonial/>}/>
    {/*Otras rutas*/}
    <Route path='/clientes' element={<SectionClientes/>}/>
    <Route path='/gestion' element={<SectionGestion/>}/>
    <Route path='/miembros' element={<SectionMiembros/>}/>
    <Route path='/faq' element={<SectionFAQ/>}/>
    <Route path='/contacto' element={<SectionContact/>}/>
    
    </Routes>
  
  <SectionFooter/>
   
   
   </>
  );
}

export default WebRoutes;
