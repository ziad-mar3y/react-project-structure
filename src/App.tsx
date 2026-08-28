import Navbar from "./components/layout/Navbar";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Table from "./components/ui/Table";

function App() {
  const handleSave = () => {
    alert("Saved successfully!");
  };

  const handleDelete = () => {
    alert("Deleted!");
  };

  return (
    <div className="App">
      <Navbar />

      <h1>Reusable Components</h1>
      <Card
        title="React"
        description="A powerful library for building user interfaces."
      />

      <Card
        title="Frontend Developer"
        description="Build modern and interactive web applications."
      >
        <Button
          text="Learn More"
          onClick={() => alert("Learn More clicked")}
          variant="secondary"
        />
      </Card>

      <Table
        columns={["Name", "Age", "City"]}
        data={[
          {
            Name: "Ahmed",
            Age: 25,
            City: "Cairo",
          },
          {
            Name: "Mona",
            Age: 22,
            City: "Giza",
          },
          {
            Name: "Omar",
            Age: 28,
            City: "Alexandria",
          },
        ]}
        
      />

      <Button text="Save" onClick={handleSave} variant="primary" />

      <Button text="Delete" onClick={handleDelete} variant="danger" />
    </div>
  );
}

export default App;
