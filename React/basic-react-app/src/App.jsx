import "./App.css";
import Description from "./Description";
import ProductTab from "./ProductTab";
function Title() {
  return <h1>I am the Title</h1>;
}



function App() {
  return (
    // <div>
    //   <Title />
    //   <h2>In description we have</h2>
    //   <Description/>
    // </div>
    <ProductTab/>
  );
}

export default App;
