import Product from "./Product";

function ProductTab(){
    return(
        <>
        <Product title="Mobile Phone" Price={40000}/>
        <Product title="Laptop" Price={59999}/>
        <Product title="Pen" Price={40}/>
        </>
    );
}

export default ProductTab;