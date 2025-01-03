import "./app.css";

// Custom Components
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import JobBoard from "../JobBoard/JobBoard";
import JobDetails from "../JobDetails/JobDetails";
import Footer from "../Footer/Footer";

// React components
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jobs" element={<JobBoard />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
