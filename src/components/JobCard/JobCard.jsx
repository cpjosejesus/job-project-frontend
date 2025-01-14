import { useNavigate } from "react-router-dom";

function JobCard({
  jobId,
  companyImg,
  companyName,
  position,
  level,
  category,
  locationName,
  publicationDate,
}) {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleCardClick = () => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="card__container">
        <img
          className="card__logo"
          src={companyImg}
          alt={`${companyName} Logo`}
        />
      </div>

      <div className="card__details">
        <div className="card__job">
          <p className="card__company">{companyName}</p>
          <p className="card__position">{position}</p>
          <p className="card__job-details">
            {level} {category ? " - " + category : ""}
          </p>
          <p className="card__date">{formatDate(publicationDate)}</p>
        </div>
        <div className="card__location">{locationName}</div>
      </div>
    </div>
  );
}

export default JobCard;
