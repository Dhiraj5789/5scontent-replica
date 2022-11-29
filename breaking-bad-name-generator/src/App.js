import NameGenerator from "./name-generator";
import "./App.css";
import IterateDouble from "./elements";

function App() {
  console.log(IterateDouble("Heisenberg"));
  return (
    <main className="App-header">
      <header>Breaking Bad</header>
      <NameGenerator />
    </main>
  );
}

export default App;
