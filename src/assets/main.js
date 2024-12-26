/*import { catalogJson, ArrayJsonToOtherArray,convertJsonToArrayJson} from "./connectToJson";


  const listaArticulos=[];

console.log(listaArticulos)
  if(listaArticulos.length === 0){
  const archivoJson= await convertJsonToArrayJson(catalogJson);
  
  await ArrayJsonToOtherArray(archivoJson, listaArticulos);
  }


  console.log(listaArticulos)


export {listaArticulos};*/

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'auto' });
};

export{scrollToTop};