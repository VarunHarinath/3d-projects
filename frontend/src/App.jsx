import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Components Importing
import Lessons from "./pages/Lessons.jsx";
import "./App.css";
import ModuleQuiz from "./components/ModuleQuiz.jsx";
import QuizzList from "./pages/QuizzList.jsx";
import Navbar from "./components/Navbar";
import Leaderboard from "./components/Leaderboard.jsx"; // Ensure this path is correct
import { Home, About, Projects, Contact } from "./pages/index.js";
import DSAPage from "./pages/lessonPages/DSAPage.jsx";
import AlgoPage from "./pages/lessonPages/AlgoPage.jsx";
import IndetailPage from "./pages/lessonPages/IndetailPageAlgo.jsx";
import IndetailPageDsa from "./pages/lessonPages/IndetailPageDsa.jsx";
import SocketIo from "./components/SocketIoC/SocketIo.jsx";

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
          <Route path="/DSApage" element={<DSAPage />} />
          <Route path="/DSApage/:id" element={<IndetailPageDsa />} />
          <Route path="/AlgoPage" element={<AlgoPage />} />
          <Route path="/AlgoPage/:id" element={<IndetailPage />} />
          <Route path="/chatrooms" element={<SocketIo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
