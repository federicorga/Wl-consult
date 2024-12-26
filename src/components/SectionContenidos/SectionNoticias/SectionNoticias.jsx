
import "./SectionNoticias.css";
import PortadaSections from "../../PortadaSections/PortadaSections";
import ArticuloList from "./ArticuloCard/ArticuloList/ArticuloList";
import { useEffect, useState } from "react";
import { arrayArtic } from "../../../assets/connectToJson";
import LineSepar from "../../ComponentesAccesorios/LineSepar/LineSepar";
import Subtitleh2 from "../../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2";

function SectionNoticias() {


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
      <PortadaSections titlePortada={"NOTICIAS"} imagen={"/img/noticiasLegislat.jpg"} />
      <section className="section-noticias">
        <Subtitleh2 text={"PUBLICACIONES"}/>
        <LineSepar/>
        
        <div className="section-articulos">
       <ArticuloList listaArticulos={listasArticulos}/>
        </div>
      </section>
     
    </>
  );
}

export default SectionNoticias;
