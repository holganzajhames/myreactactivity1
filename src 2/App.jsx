import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const buttonStyle = "rounded-lg border border-indigo-700 bg-indigo-700 px-6 py-3.5 text-white hover:bg-indigo-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500";

  return (
    <div className="flex min-h-screen items-center justify-center bg-indigo-50 p-6 font-sans text-slate-800">
      <main className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-lg">
        <h1 className="mb-4 text-3xl font-bold">My First React Website</h1>
        <p className="text-base leading-relaxed text-slate-600">A simple counter made using React.js and Tailwind CSS.</p>
        <div className="my-8" role="status" aria-live="polite">
          <span className="block text-sm text-slate-600">Current count</span>
          <span className="block break-all text-7xl font-bold text-indigo-700">{count}</span>
        </div>
        <div className="mb-6 flex items-center justify-center gap-3">
          <label htmlFor="step" className="text-base text-slate-600">Count by</label>
          <select id="step" value={step} onChange={(event) => setStep(Number(event.target.value))} className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-base focus-visible:outline-2 focus-visible:outline-indigo-700">
            <option value={1}>1</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <button className={buttonStyle} onClick={() => setCount(count + step)}>Click Me</button>
          <button className={buttonStyle} onClick={() => setCount(count - step)}>Decrease</button>
          <button className="rounded-lg border border-indigo-700 bg-white px-6 py-3.5 text-indigo-700 hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500" onClick={() => setCount(0)}>Reset</button>
        </div>
        <p className="mt-6 text-sm text-slate-600">Add or subtract {step}. Reset to start again.</p>
      </main>
    </div>
  );
}

export default App;
