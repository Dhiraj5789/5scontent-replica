import NameGenerator from "./name-generator";
import "./App.css";
import elementsArr from "./elements";

function App() {
  console.log(elementsArr);
  return (
    <main className="App-header">
      <header>Breaking Bad</header>
      <NameGenerator />
    </main>
  );
}

export default App;
