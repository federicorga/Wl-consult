const catalogJson = '/json/articulos.json';
const arrayArtic= ListaArticulos(catalogJson);

const generarId = (array, objeto) => {
  if (array.length === 0) {
    objeto.id = 1;
  } else {
    objeto.id = array[array.length - 1].id + 1;
  }
};

async function ConvertArrayJsonToArray(arrayJson) {
  
  const newArray = [];

  arrayJson.forEach((object) => {
    generarId(newArray, object);
    newArray.push(object);
  });

  return newArray;
}

const GetElementInArray = async (array, id) => {
  try {
    const parsedId = Number(id);
    const element = array.find(item => item.id === parsedId);
    return element;
  } catch (error) {
    console.error('Error al buscar el elemento:', error);
    return null;
  }
};

async function ConvertJsonToArrayJson(archivoJson) {
  try {
    const respuesta = await fetch(archivoJson);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error('Error al cargar el JSON:', error);
    return null;
  }
}

async function ListaArticulos(UrlJson) {

  const archivoJson = await ConvertJsonToArrayJson(UrlJson);
 
  return ConvertArrayJsonToArray(archivoJson);
}

async function BuscarArticuloPorId(id) {

  const listaArticulos = await arrayArtic;
 
  return GetElementInArray(listaArticulos, id);
}

export { GetElementInArray, BuscarArticuloPorId, catalogJson,arrayArtic};
