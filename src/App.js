import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState(true);
  return (
    <div>
      <button
        onClick={() => setColor(!color)}
        style={{ backgroundColor: color ? "red" : "blue" }}
      >
        Change to {color ? "blue" : "red"}
      </button>
    </div>
  );
}

export default App;
