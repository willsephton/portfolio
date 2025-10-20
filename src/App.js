import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
