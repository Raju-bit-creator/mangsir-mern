import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

function App() {
  const [count, setCount] = useState(2);
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Dark mode enable");
  const [alert, setAlert] = useState(null);
  const handleCount = () => {
    setCount((count) => count + 1);
  };
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Light mode enable");
      showAlert("success", "dark mode has been enabled");
    } else {
      setMode("light");
      setText("Dark mode enable");
      showAlert("success", "light mode has been enabled");
    }
  };

  return (
    <>
      <Navbar
        title="hamro bazzar"
        toggleMode={toggleMode}
        text={text}
        mode={mode}
      />
      <Alert alert={alert} />
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
