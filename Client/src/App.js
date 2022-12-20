import './App.css';
import React from "react";

//Pages
import Home from './Pages/Home'
import Second from './Pages/Second'


// We use Route in order to define the different routes of our application
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/second" element={<Second/>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
