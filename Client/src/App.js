import React from "react";

//CSS files
import './App.css';

//Pages
import Welcome from "./Pages/Welcome";
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
// import Second from './Pages/Second'

// We use Route in order to define the different routes of our application
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Welcome/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/skills" element={<Skills/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
  );
}

export default App;
