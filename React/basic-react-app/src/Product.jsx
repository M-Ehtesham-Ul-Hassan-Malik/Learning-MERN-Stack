import "./Product.css"

//props is same as aurgument in JavaScript
function Product({title, Price}){
    return(
        <div className="Product">
        <h3>{title}</h3>
        <h5>Price: {Price}</h5>
        </div>
    );
}

export default Product;