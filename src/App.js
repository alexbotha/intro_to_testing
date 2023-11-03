import "./App.css";
import { useState } from "react";

export function replaceCamel(colorName) {
  return colorName.split(/(?=[A-Z])/).join(" ");
  // .split("")
  // .map((char, index) => {
  //   if (index === 0 || char !== char.toUpperCase()) {
  //     return char;
  //   } else {
  //     return " " + char
  //   }
  // })
  // .join("");
}

function App() {
  const [color, setColor] = useState(true);
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        onClick={() => setColor(!color)}
        style={{
          backgroundColor: !disabled ? (color ? "red" : "blue") : "grey",
        }}
        disabled={disabled}
      >
        Change to {color ? "blue" : "red"}
      </button>

      <input
        type="checkbox"
        id="aaa"
        label="aaa"
        onChange={(e) => setDisabled(e.target.checked)}
      />
      {/* We can search for a specific input via a label in our tests by giving our input an id and then using htmlFor in our label to link them */}
      <label htmlFor="aaa">aaa</label>
    </div>
  );
}

export default App;
