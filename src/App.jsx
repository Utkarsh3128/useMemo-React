import "./App.css";
import { useState, useEffect, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const result = useMemo(()=> {
    return slowFunc(number);
  },[number]);

  const styleColors = useMemo(() => {
    return {
      background: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [styleColors]);

  return (
    <>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        ></input>
        <h1>{number}</h1>
        <button
          onClick={() => {
            setDark((prevDark) => !prevDark);
          }}
        >
          Change Theme
        </button>
        <h1 style={styleColors}>{result}</h1>
      </div>
    </>
  );
}

export default App;

function slowFunc(num) {
  console.log("Calculating");
  for (let i = 0; i < 100000000; i++) {
    return (num += 1);
  }
}
