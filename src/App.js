import { useState } from "react";

const API_URL = "https://flask-test-api-juan-andara-dev.apps.rm3.7wse.p1.openshiftapps.com/test";
const ENV_URL = "https://flask-test-api-juan-andara-dev.apps.rm3.7wse.p1.openshiftapps.com/env";

function App() {
  const [result, setResult] = useState(null);
  const [envResult, setEnvResult] = useState(null);
  const [error, setError] = useState(null);

  const callApi = async (url, setter) => {
    setError(null);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setter(await res.json());
    } catch (e) {
      setter(null);
      setError(e.message);
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>React + Flask Test</h1>

      <button
        onClick={() => callApi(API_URL, setResult)}
        style={{ backgroundColor: "#4B286D", color: "#FFFFFF" }}
      >
        Submit
      </button>

      <button
        onClick={() => callApi(ENV_URL, setEnvResult)}
        style={{ backgroundColor: "#4B286D", color: "#FFFFFF", marginLeft: 10 }}
      >
        Show env value
      </button>

      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      {envResult && <pre>{JSON.stringify(envResult, null, 2)}</pre>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
}

export default App;
