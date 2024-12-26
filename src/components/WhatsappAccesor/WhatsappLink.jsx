import React from 'react';
import { Link } from 'react-router-dom';

const telefonoWhatsapp= 5491153140359;

const textoPredeterminadoWhatsapp='Hola!%20Quiero%20agendar%20una%20cita';
function WhatsappLink({img}) {



  return (
    <>
        <Link to={`https://wa.me/${telefonoWhatsapp}?text=${textoPredeterminadoWhatsapp}`}aria-label="Boton Whatsapp"target="_blank">{img}</Link>
    </>
  );
}

export {telefonoWhatsapp, textoPredeterminadoWhatsapp, WhatsappLink};
