import MetaLogo from "../../images/meta.png";

function JobCard() {
  return (
    <div className="card">
      <div className="card__container">
        <img className="card__logo" src={MetaLogo} alt="Meta Logo" />
      </div>

      <div className="card__details">
        <div className="card__job">
          <p className="card__company">Meta</p>
          <p className="card__position">Software Engineer</p>
          <p className="card__job-details">Contract - Senior - Category</p>
          <p className="card__date">4 de noviembre 2020</p>
        </div>

        <div className="card__location">Santa Cruz, Bolivia</div>
      </div>
    </div>
  );
}

export default JobCard;
