import "./app.css";

// Components
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import JobBoard from "../JobBoard/JobBoard";
import Footer from "../Footer/Footer";

// React components
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jobboard" element={<JobBoard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
