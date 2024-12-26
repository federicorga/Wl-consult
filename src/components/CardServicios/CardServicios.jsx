import './CardServicios.css'

function CardServicios({titulo, img}) {
  return (
<>
  <figure>
    <img src={`img/ServiciosImg/${img}`} alt="Mountains" width={"100%"} />
    <figcaption>{titulo}</figcaption>
  </figure>

</>

  );
}

export default CardServicios;
