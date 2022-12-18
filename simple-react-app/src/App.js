import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <button onClick={callApi}>Call API</button>
        </header>
      </div>
  );
}

function callApi() {
    fetch('http://localhost:3001/details', { method: 'GET' })
        .then(response => response.json())
        .then(data => alert(JSON.stringify(data)))
}

export default App;
