import "./App.css";
import Description from "./Description";
function Title() {
  return <h1>I am the Title</h1>;
}



function App() {
  return (
    <div>
      <Title />
      <h2>In description we have</h2>
      <Description/>
    </div>
  );
}

export default App;
