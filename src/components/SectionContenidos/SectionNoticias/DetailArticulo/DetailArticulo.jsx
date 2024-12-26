import './DetailArticulo.css';
import LineSepar from '../../../ComponentesAccesorios/LineSepar/LineSepar';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BuscarArticuloPorId } from '../../../../assets/connectToJson';
import Subtitleh2 from '../../../ComponentesAccesorios/Subtitles/Subtitleh2/Subtitleh2';

function DetailArticulo({ id }) {
  const [item, setArticulo] = useState([]);

  id = Number(useParams().id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await BuscarArticuloPorId(id).then((prod) => setArticulo(prod));
      } catch (error) {
        console.error('Error al obtener el artículo:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {item ? (
        <div className='Articulo-detail-content'>
          <Subtitleh2 text={item.tituloArt} />
          <Link className='link-Noticias' to={`/noticias`}>
            Volver al Menu
          </Link>
          <LineSepar />

          {/* Utiliza el método map para dividir item.fragmentoTexto en párrafos */}
          <div className='articulo-paragraphs'>
            {Array.isArray(item.fragmentoTexto) ? (
              item.fragmentoTexto.map((parrafo, index) => (
                <p key={index}>{parrafo}</p>
              ))
            ) : (
              <p>{item.fragmentoTexto}</p>
            )}
          </div>
        </div>
      ) : (
        <p>Cargando Articulo...</p>
      )}
    </>
  );
}

export default DetailArticulo;
