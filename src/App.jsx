import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(2);
  const [name, setName] = useState("ram");
  const handleCount = () => {
    setCount((count) => count + 1);
  };
  setTimeout(() => {
    setName("hari");
  }, 3000);

  return (
    <>
      <Navbar title="hamro bazzar" />
      <div className="card">
        <button className="mt-4" onClick={handleCount}>
          click me !
        </button>
      </div>
      <p className="read-the-docs">yo click {count} times in button</p>
      <p>
        what is your friend name?<br></br>ans. {name}
      </p>
    </>
  );
}

export default App;
