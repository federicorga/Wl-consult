import './ArticuloCard.css';
import { Link } from 'react-router-dom';
import LineSepar from '../../../ComponentesAccesorios/LineSepar/LineSepar';
import { scrollToTop } from '../../../../assets/main';

function ArticuloCard({ articulo}) {
    // Verifica si el objeto 'articulo' existe antes de acceder a sus propiedades
   
    if (!articulo) {
        return <p>Artículo no definido</p>;
    }

    // Ahora puedes acceder a las propiedades de 'articulo' de forma segura
    let fechas = articulo.fechas.toUpperCase();
    let titulo = articulo.tituloArt.toUpperCase();
    const fragmentoTextoString = Array.isArray(articulo.fragmentoTexto) ? articulo.fragmentoTexto.join(' ') : articulo.fragmentoTexto;
    const primerasTreintaPalabras = fragmentoTextoString.split(' ').slice(0, 21).join(' ');
    return (

        
        <div className='articuloCard-div'>
            <h2 className='articuloCard-fecha-an'>{fechas}</h2>
            <p className='articuloCard-title'>{titulo}</p>
            <LineSepar/>
            <p className='articuloCard-texto'>{`${primerasTreintaPalabras}...`}</p>
            <Link className='link-articuloCard' onClick={scrollToTop} to={`/noticias/articulo/${articulo.id}` }>
                <b>Leer más</b>
            </Link>
        </div>
    );
}

export default ArticuloCard;
