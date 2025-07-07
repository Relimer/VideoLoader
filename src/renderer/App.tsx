import { useEffect, useState } from 'react'
import reactLogo from '/resources/assets/react.svg'
import viteLogo from '/resources/assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [versions, setVersions] = useState({
    chrome: '',
    node: '',
    electron: ''
  });

  const [pingResponse, setPingResponse] = useState<string>('');
  useEffect(() => {
    // Safe to assume window.versions is exposed via preload script
    setVersions({
      chrome: window.versions.chrome(),
      node: window.versions.node(),
      electron: window.versions.electron()
    });

    const fetchPing = async () => {
      const response = await window.versions.ping();
      console.log(response);
      setPingResponse(response);
    };

    fetchPing();
  }, []);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Ping response: {pingResponse}</p>
      <p>
        This app is using Chrome (v{versions.chrome}), Node.js (v{versions.node}), and Electron (v{versions.electron})
      </p>
    </>
  )
}

export default App
