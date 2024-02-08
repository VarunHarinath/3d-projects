import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        Navbar
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/about" element={"about"} />
          <Route path="/projects" element={"Projects"} />
          <Route path="/contact" element={"Contact"} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
