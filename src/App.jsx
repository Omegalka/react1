import Button from "./components/Button";

function App() {
  const handleClick = () => {
    alert("The world has been destroyed, what have you done");
  };

  return (
    <div>
      <h1>My React App</h1>
      <Button text="Press me, trust" type="button" onClick={handleClick} />
    </div>
  );
}

export default App;