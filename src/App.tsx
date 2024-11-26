import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Counter } from "./features/Counter";
import { Contact } from "./features/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter />
      <Contact />
    </>
  );
}

export default App;