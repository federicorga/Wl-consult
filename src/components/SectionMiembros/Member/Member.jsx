import './Member.css'

function Member({nombre, titulo,imgurl}) {
  return (
    <div className='div-Content-Miembro'>
      <img src={`/img/Miembros/${imgurl}`} alt=""/>
      <div className='div-info-Miembro'>
      <h2>{nombre}</h2>
      <p>{titulo}</p>
      </div>
    </div>
  );
}

export default Member;
