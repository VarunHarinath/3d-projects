import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Componenets Importing
import Lessons from "./pages/Lessons.jsx";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Home, About, Projects, Contact } from "../src/pages/index.js";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
