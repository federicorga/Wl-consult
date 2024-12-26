import ArticuloCard from "../ArticuloCard";

const ArticuloList = ({listaArticulos}) => {
    

    return (
        <>
            {listaArticulos.map(articulo => 
            
            
            <ArticuloCard key={articulo.id} articulo = {articulo}/>
           
            )
            }
        </>
    );
}

export default ArticuloList;