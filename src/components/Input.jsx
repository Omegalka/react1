import Input from "./components/Input";

function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>My React App</h1>
      <Input
        type="text"
        placeholder="text"
        onChange={handleChange}
      />
    </div>
  );
}

export default App;