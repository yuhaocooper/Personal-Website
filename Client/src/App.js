import React from "react";

//CSS files
import './App.css';

//Pages
import Home from './Pages/Home'
import About from "./Pages/About";
import Skills from './Pages/Skills'
import Work from "./Pages/Work";
import Blog from "./Pages/Blog";

// We use Route in order to define the different routes of our application
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Resume from "./Pages/Resume";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/skills" element={<Skills/>} />
          <Route exact path="/work" element={<Work/>} />
          <Route exact path="/resume" element={<Resume/>} />
          <Route exact path="/blog" element={<Blog/>} />
        </Routes>
    </Router>
  );
}

export default App;
