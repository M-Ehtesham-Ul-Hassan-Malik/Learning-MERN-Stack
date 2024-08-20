import "./App.css";

function Title() {
  return <h1>I am the Title</h1>;
}

function Description() {
  return <h3>I am the description</h3>;
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
