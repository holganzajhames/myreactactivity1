import { useState } from "react";
import "./App.css";

function App() {
  // React remembers the current number. It starts at zero.
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <h1>My First React Website</h1>
      <p>A simple counter made using React.js and CSS.</p>
      <div className="counter" role="status" aria-live="polite">
        <span className="label">Current count</span>
        <span className="number">{count}</span>
      </div>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <button className="reset" onClick={() => setCount(0)}>Reset</button>
      </div>
      <p className="hint">Click to add 1. Reset to start again.</p>
    </main>
  );
}

export default App;
