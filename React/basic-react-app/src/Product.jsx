import "./Product.css"

//props is same as aurgument in JavaScript
function Product({title, Price, features}){
    // const list = features.map((feature) => <li>{feature}</li>);
    let isDiscount = Price > 30000;
    let styles = {backgroundColor : isDiscount ? "pink" : null} 
    return(
    <div className="Product" style={styles} >
        <h3>{title}</h3>
        <h5>Price: {Price}</h5>
        {/* <h6>{features}</h6> */}
        {/* Conditiion => {Price>30000 ? <p>Discount of 5%</p> : null}*/}

        {/* condition */}
        {isDiscount && <p>Discount of 5%</p>} 

    </div>
    );
}

export default Product;