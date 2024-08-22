import Product from "./Product";

function ProductTab(){
    let options = [<li>High-Tech</li>,<li>Durable</li>,<li>Fast</li>];
    
    return(
        <>
        <Product title="Mobile Phone" Price={40000} features={options}/>
        <Product title="Laptop" Price={59999}/>
        <Product title="Pen" Price={40}/>
        </>
    );
}

export default ProductTab;