import Home from "./pages/Home";
import Members from "./pages/Members";
import Research from "./pages/Research";
import News from "./pages/News";
import Resources from "./pages/Resources";

import Header from "./components/Header";
import Footer from "./components/Footer";

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
  <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/members" element={<Members/>} />
        <Route path="/research" element={<Research/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/resources" element={<Resources/>} />
      </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
