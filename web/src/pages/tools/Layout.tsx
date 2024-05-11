import { useState } from 'react';

export function ToolsLayout() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[600px] mx-auto bg-slate-500 h-[800px]">
      <h1>Good</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}
