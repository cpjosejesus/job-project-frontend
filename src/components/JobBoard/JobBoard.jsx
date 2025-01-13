import JobCard from "../JobCard/JobCard";
import SearchForm from "../SearchForm/SearchForm";
import PreLoader from "../Preloader/Preloader";
import DropDownBtn from "../DropDownBtn/DropDownBtn";
import NotFound from "../NotFound/NotFound";

import { LEVELS, CATEGORIES } from "../../utils/utils";

function JobBoard({
  jobs,
  companies,
  isLoading,
  level,
  companyFilter,
  category,
  onClickMoreJobs,
  handleLevel,
  handleCompany,
  handleCategory,
  clearFilters,
}) {
  const handleClickJobs = () => {
    onClickMoreJobs();
  };

  return (
    <section className="jobs">
      <h1 className="jobs__title">Jobs for you</h1>
      <SearchForm handleCompany={handleCompany} />
      <section className="jobs__filters-section">
        <div className="jobs__buttons">
          <DropDownBtn
            btnName="Levels"
            elements={LEVELS}
            handleSelection={handleLevel}
          />
          {}
          <DropDownBtn
            btnName="Category"
            elements={CATEGORIES}
            handleSelection={handleCategory}
          />
          <button
            className={`btn__jobs ${
              !level && !category && !companyFilter ? "btn__jobs_disabled" : ""
            }`}
            onClick={clearFilters}
            disabled={!level && !category && !companyFilter}
          >
            Clear Filters
          </button>
        </div>

        <div className="jobs__filters">
          {level && <div className="jobs__filters-active">{level}</div>}
          {companyFilter && (
            <div className="jobs__filters-active">{companyFilter}</div>
          )}
          {category && <div className="jobs__filters-active">{category}</div>}
        </div>
      </section>

      {!isLoading && jobs.length === 0 ? <NotFound /> : ""}

      {jobs.length > 0 && (
        <section className="cards">
          {jobs.map((card, idx) => (
            <JobCard
              key={idx}
              jobId={card.id}
              companyId={card.company.id}
              companyName={card.company.name}
              companyImg={companies[card.company.id]}
              position={card.name}
              level={card.levels[0]?.name}
              category={card.categories[0]?.name}
              publicationDate={card.publication_date}
              locationName={card.locations[0]?.name}
            />
          ))}
        </section>
      )}

      {isLoading && <PreLoader />}

      {!isLoading && jobs.length > 0 && (
        <div className="btn__container">
          <button className="btn__jobs" onClick={handleClickJobs}>
            View More Jobs
          </button>
        </div>
      )}
    </section>
  );
}

export default JobBoard;
