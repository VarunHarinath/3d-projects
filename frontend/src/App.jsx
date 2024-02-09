import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Componenets Importing
import Lessons from "./pages/Lessons.jsx";
import "./App.css";
import ModuleQuiz from "./components/ModulQuiz.jsx";
import QuizzList from "./pages/QuizzList.jsx";
import Navbar from "./Components/Navbar";
import Leaderboard from "./components/Leaderboard.jsx";
import { Home, About, Projects, Contact } from "../src/pages/index.js";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quizz" element={<QuizzList />} />
          <Route path="/quizz/1" element={<ModuleQuiz />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
