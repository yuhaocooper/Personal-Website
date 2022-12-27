import React from "react";

//CSS files
import './App.css';

//Pages
import Home from './Pages/Home'
import Second from './Pages/Second'
import Headerbar from './Pages/Navbar'

// We use Route in order to define the different routes of our application
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/second" element={<Second/>} />
          <Route exact path="/navigation" element={<Headerbar/>} />
        </Routes>
    </Router>
  );
}

export default App;
