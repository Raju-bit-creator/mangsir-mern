import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UserList from "./components/UserList";
import User from "./components/User";
import Product from "./components/Product";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProductState from "./context/ProductState";

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
      <ProductState>
        <Router>
          <Navbar
            title="hamro bazzar"
            toggleMode={toggleMode}
            text={text}
            mode={mode}
          />
          <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/product" element={<Product />} />
            <Route path="/:user_Id/:userName" element={<User />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ProductState>
    </>
  );
}

export default App;
