import "./Product.css"

//props is same as aurgument in JavaScript
function Product({title, Price, features}){
    // const list = features.map((feature) => <li>{feature}</li>);
    return(
    <div className="Product">
        <h3>{title}</h3>
        <h5>Price: {Price}</h5>
        <h6>{features}</h6>
        {/* Conditiion => {Price>30000 ? <p>Discount of 5%</p> : null}*/}

        {/* condition */}
        {Price>30000 && <p>Discount of 5%</p>}

    </div>
    );
}

export default Product;