// Custom Components
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import JobBoard from "../JobBoard/JobBoard";
import JobDetails from "../JobDetails/JobDetails";
import Footer from "../Footer/Footer";

// React components
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Api
import api from "../../utils/MuseAPI";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    api.getJobsbyPage(0).then((res) => {
      setJobs(res.results);
    });
  }, []);

  const handleMoreJobs = () => {
    setIsLoading(true);
    const nextPage = page + 1;
    setPage(nextPage);

    api
      .getJobsbyPage(nextPage)
      .then((res) => {
        setJobs((prevJobs) => [...prevJobs, ...res.results]);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="page">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/jobs"
          element={
            <JobBoard
              jobs={jobs}
              isLoading={isLoading}
              onClickMoreJobs={handleMoreJobs}
            />
          }
        />
        <Route path="/jobs/:id" element={<JobDetails data={jobs} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
