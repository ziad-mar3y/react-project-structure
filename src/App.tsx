import Navbar from "./components/layout/Navbar";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Hello, World!</h1>
      <Button >
        Click me
      </Button>
      <Input  />
    </div>
  );
}

export default App;