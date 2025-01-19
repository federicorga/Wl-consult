import React from 'react';
import "./MyMenu.css";
import BtnIndice from '../BtnIndice/BtnIndice';
import { Link } from 'react-router-dom';
import { scrollToTop } from "../../../assets/main";

function MyMenu({ toggleMenu }) {
  return (
    <ul className='nav-list'>
      <Link to={"/"} onClick={() => {toggleMenu(); scrollToTop();}}><BtnIndice text={'Inicio'}  /></Link>
    

{/*
      <div className='dropdown-contenido'> <BtnIndice className='btn-dropdown-contenido' text={'Contenido'} />
      <ul className='dropdown-contenido-submenu'>
      <li className='dropdown-contenido-li'> <Link to={"/noticias"} onClick={() => {toggleMenu(); scrollToTop();}}> <BtnIndice text={'Noticias'} />  </Link></li>
      <li className='dropdown-contenido-li'> <Link to={"/obras-publicadas"} onClick={() => {toggleMenu(); scrollToTop();}}> <BtnIndice text={'Obras publicadas'} />  </Link></li>
      <li className='dropdown-contenido-li'> <Link to={"/en-los-medios"} onClick={() => {toggleMenu(); scrollToTop();}}> <BtnIndice text={'En los medios'} />  </Link></li>
      </ul>
      
      </div>
  */}

      <Link to={"/noticias"} onClick={() => {toggleMenu(); scrollToTop();}}> <BtnIndice text={'Noticias'} />  </Link> 

      <Link to={"/asesoria-legal"} onClick={() => {toggleMenu(); scrollToTop();}}> <BtnIndice text={'Area de asesoramiento'} /></Link>
      <Link to={"/gestion"} onClick={() => {toggleMenu(); scrollToTop();}}> <BtnIndice text={'Area de gestión'} /></Link>
      <Link to={"/en-los-medios"} onClick={() => {toggleMenu(); scrollToTop();}}> <BtnIndice text={'En los medios'} />  </Link>
      <Link to={"/obras-publicadas"} onClick={() => {toggleMenu(); scrollToTop();}}> <BtnIndice text={'Obras publicadas'} />  </Link>
      <Link to={"/miembros"} onClick={() => {toggleMenu(); scrollToTop();}}> <BtnIndice text={'Miembros'} /></Link> 
      <Link to={"/faq"} onClick={() => {toggleMenu(); scrollToTop();}}> <BtnIndice text={'FAQ'} /></Link>
      <Link to={"/contacto"} onClick={() => {toggleMenu(); scrollToTop();}}> <BtnIndice text={'Contacto'} /></Link>
    </ul>



  );
}

export default MyMenu;



