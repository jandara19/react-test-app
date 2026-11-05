import { useState } from "react";

// Replace with your Flask route, keeping /test at the end
const API_URL = "https://REPLACE-WITH-FLASK-ROUTE/test";

function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setError(null);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setResult(await res.json());
    } catch (e) {
      setResult(null);
      setError(e.message);
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>React + Flask Test</h1>
      <button onClick={handleSubmit}>Submit</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default App;
