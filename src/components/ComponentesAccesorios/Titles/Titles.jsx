import "./Titles.css"

import React, { useState, useEffect } from "react";
function Titles({textTitle ="TITULO", fontSize="50px", classNameTitleh1}) {
  const [initialStyle, setInitialStyle] = useState(true);
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setInitialStyle(false);
    }, 100); // Cambiar a la cantidad de milisegundos que desees

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timeoutId);
  }, []);

  return (
   
    <div className={`${initialStyle ? "contentTitleh1 h1" : "contentTitleh1-visible h1"} ${classNameTitleh1}` }>
      <h1 style={{ fontSize: fontSize }}>{textTitle}</h1>
    </div>
  
  );
}

export default Titles;
