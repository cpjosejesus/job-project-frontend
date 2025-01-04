import JobCard from "../JobCard/JobCard";
import SearchForm from "../SearchForm/SearchForm";
import PreLoader from "../Preloader/Preloader";

function JobBoard({ jobs, isLoading, onClickMoreJobs }) {
  const handleClick = () => {
    onClickMoreJobs();
  };

  return (
    <section>
      <h1 className="jobs-title">Jobs for you</h1>
      <SearchForm />
      <section className="cards">
        {jobs.map((card, idx) => {
          return (
            <JobCard
              key={idx}
              jobId={card.id}
              companyId={card.company.id}
              companyName={card.company.name}
              position={card.name}
              level={card.levels[0]?.name}
              category={card.categories[0]?.name}
              publicationDate={card.publication_date}
              locationName={card.locations[0]?.name}
            />
          );
        })}
      </section>

      <div className="btn__container">
        {isLoading ? (
          <PreLoader />
        ) : (
          <button className="btn__jobs" onClick={handleClick}>
            View More Jobs
          </button>
        )}
      </div>
    </section>
  );
}

export default JobBoard;
