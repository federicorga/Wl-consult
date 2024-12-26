import React from 'react';
import { Link } from 'react-router-dom';
function LogoWL({size="250px"}) {
  return (
    <div>
      <Link to={"/"}>
      <img src="./img/fondowlmarcosinfondo.png" alt="" width={size} /></Link>
    </div>
  );
}

export default LogoWL;
