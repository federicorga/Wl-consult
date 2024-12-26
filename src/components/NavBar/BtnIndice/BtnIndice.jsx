
import './BtnIndice.css'

function BtnIndice({className='btnindicep',text}) {
  //const texto= text.toUpperCase()
  return (
    <>
      <li >
                       
        <p className={className}>{text}</p>
                   
        </li>
    </>
  );
}


export default BtnIndice;
