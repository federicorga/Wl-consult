import './DetailArticuloContainer.css'


import DetailArticulo from '../DetailArticulo/DetailArticulo';
import { useParams} from 'react-router-dom';
import { useEffect,useState} from "react";
import PortadaSections from '../../../PortadaSections/PortadaSections';
import Articulo from '../Articulo/Articulo';
import LibroPublicidad from '../../../SectionContenidos/Publicidad/LibroPublicidad';
import ArticuloCard from '../ArticuloCard/ArticuloCard';
import CarrouselGeneral from '../../../CarrouselGeneral/CarrouselGeneral';
import { arrayArtic } from '../../../../assets/connectToJson';


function DetailArticuloContainer() {
  const id = Number(useParams().id);


  const [listasArticulos, setListaArticulos] = useState([]);

  useEffect(() => {
  
    const fetchArticulos = async () => {
      try {
    
        const lista= await arrayArtic;
        setListaArticulos(lista);
      
      } catch (error) {
        console.error("Error al obtener la lista de artículos:", error);
      }
    };

    // Llamar a la función para obtener los artículos
    fetchArticulos();
 
  }, []); // El segundo argumento [] asegura que el efecto se ejecute solo una vez, equivalente a componentDidMount



  return (
    <>
     <PortadaSections titlePortada={"NOTICIAS"} imagen={"https://www.colegioabogesquel.com/wp-content/uploads/2018/09/maza-footerFinal.jpg"} />
     <section className="Section-Contanier-Articulo-Descripcion">
      <DetailArticulo id={id}/>
      <LibroPublicidad></LibroPublicidad>
      </section>
      <Articulo />

      <div className="inicio-SecNoticias">
      <CarrouselGeneral titleCarrousel="ULTIMAS NOTICIAS" items={listasArticulos.slice(0, 5).map((articulo) => (
    <ArticuloCard ClassSizeArtCard={"size-artCard-inicio"} key={articulo.id} articulo={articulo} />
  ))}></CarrouselGeneral>
    </div>
    </>
  );
}

export default DetailArticuloContainer;
