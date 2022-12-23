import './App.css';
import React from "react";

//Pages
import Home from './Home/Home'
import Second from './Second/Second'


// We use Route in order to define the different routes of our application
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header>
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
