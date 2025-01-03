import api from "../../utils/MuseAPI";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function JobCard({
  companyId,
  companyName,
  position,
  level,
  category,
  locationName,
  publicationDate,
}) {
  const [companyImg, setCompanyImg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.getCompanyById(companyId).then((res) => {
      setCompanyImg(res.refs.logo_image);
    });
  }, [companyId]);

  const handleCardClick = () => {
    navigate(`/jobs/${companyId}`);
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
            {level} - {category}
          </p>
          <p className="card__date">{publicationDate}</p>
        </div>
        <div className="card__location">{locationName}</div>
      </div>
    </div>
  );
}

export default JobCard;
