// Custom Components
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import JobBoard from "../JobBoard/JobBoard";
import JobDetails from "../JobDetails/JobDetails";
import Footer from "../Footer/Footer";

// React Hooks
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Api
import api from "../../utils/MuseAPI";

function App() {
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const filtersParams = handleFilters({
      level,
      company: companyFilter,
      category,
    });
    api
      .getJobsbyPage(page, filtersParams)
      .then((res) => {
        if (page == 0) {
          setJobs(res.results);
        } else {
          setJobs((prevJobs) => [...prevJobs, ...res.results]);
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  }, [level, companyFilter, category, page]);

  useEffect(() => {
    const storedCompanies = JSON.parse(localStorage.getItem("companies")) || {};

    jobs.forEach((job) => {
      api.getCompanyById(job.company.id).then((res) => {
        const newCompany = {
          [res.id]: res.refs.logo_image,
        };

        setCompanies((prevCompanies) => ({
          ...prevCompanies,
          ...newCompany,
        }));
      });
    });
  }, [jobs]);

  const handleLevel = (newLevel) => {
    setPage(0);
    setLevel(newLevel);
    console.log(companies);
  };

  const handleCompany = (newCompany) => {
    setPage(0);
    setCompanyFilter(newCompany);
  };

  const handleCategory = (newCategory) => {
    setPage(0);
    setCategory(newCategory);
  };

  const clearFilters = () => {
    setPage(0);
    setCompanyFilter("");
    setLevel("");
    setCategory("");
  };

  const handleMoreJobs = () => {
    setPage(page + 1);
  };

  const handleFilters = (filters) => {
    const activeFilters = Object.fromEntries(
      Object.entries(filters).filter(([key, value]) => value !== "")
    );

    return activeFilters;
  };

  const handleSearch = () => {};

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
              companies={companies}
              isLoading={isLoading}
              level={level}
              companyFilter={companyFilter}
              category={category}
              onClickMoreJobs={handleMoreJobs}
              onClickFilters={handleFilters}
              onSearch={handleSearch}
              handleLevel={handleLevel}
              handleCompany={handleCompany}
              handleCategory={handleCategory}
              clearFilters={clearFilters}
            />
          }
        />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
