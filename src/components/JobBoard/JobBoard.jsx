import JobCard from "../JobCard/JobCard";
import SearchForm from "../SearchForm/SearchForm";
import { data } from "../../utils/fakeData";

function JobBoard() {
  return (
    <section>
      <h1 className="jobs-title">Jobs for you</h1>
      <SearchForm />
      <section className="cards">
        {data.results.map((card) => {
          return (
            <JobCard
              key={card.id}
              companyId={card.company.id}
              companyName={card.company.name}
              position={card.name}
              level={card.levels[0].name}
              category={card.categories[0]?.name}
              publicationDate={card.publication_date}
              locationName={card.locations[0].name}
            />
          );
        })}
      </section>

      <div className="btn__container">
        <button className="btn__jobs">View More Jobs</button>
      </div>
    </section>
  );
}

export default JobBoard;
