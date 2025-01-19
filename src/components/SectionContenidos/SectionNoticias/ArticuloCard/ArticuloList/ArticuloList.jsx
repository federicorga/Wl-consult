import ArticuloCard from "../ArticuloCard";

const ArticuloList = ({listaArticulos,activeLimitArt=false,maxItem=5}) => {

    let articulos;


    if(activeLimitArt){

    
        articulos = listaArticulos.slice(0, maxItem);
    
}else{
    articulos= listaArticulos;
}

    return (
        <>
            {articulos.map(articulo => 
            
            <ArticuloCard key={articulo.id} articulo = {articulo}/>
           
            )
            }
        </>
    );
}

export default ArticuloList;