import './Articulo.css'

function Articulo({tituloArticulo="",fechaMes="",parrafoTexto="",ArticuloId}) {
  return (
    <section>
      <h2 className='title-articulo'>{tituloArticulo}</h2>
      <div><p>{fechaMes}</p> <p></p></div>
      <div><p>{parrafoTexto}</p></div>
      
      
    </section>
  );
}

export default Articulo;
