import NameGenerator from "./name-generator";
import "./App.css";

function App() {
  return (
    <main className="App-header">
      <h2 style={{ fontWeight: "300" }}>
        <span style={{ color: "green", fontWeight: "700" }}>Br</span>eaking{" "}
        <span style={{ color: "green", fontWeight: "700" }}>Ba</span>d
      </h2>
      <NameGenerator />
    </main>
  );
}

export default App;
