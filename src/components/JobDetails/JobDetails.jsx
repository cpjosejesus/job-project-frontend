import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// import metaLogo from "../../images/meta.png";
import userIcon from "../../images/User.svg";
import pinIcon from "../../images/Pin.svg";
import PreLoader from "../Preloader/Preloader";
import api from "../../utils/MuseAPI";

function JobDetails({ data }) {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const location = useLocation();
  const [companyImg, setCompanyImg] = useState("");

  useEffect(() => {
    if (!data) return;
    console.log(data);
    console.log(id);

    const selectedJob = data.find((res) => res.id == id);
    setJob(selectedJob);
    window.scrollTo(0, 0);

    api.getCompanyById(selectedJob.company.id).then((res) => {
      setCompanyImg(res.refs.logo_image);
      console.log(res.refs.landing_page);
    });
  }, [data, id, location]);

  const handleApplyClick = () => {
    window.open(job.refs.landing_page, "_blank");
  };

  if (!job)
    return (
      <div>
        <PreLoader />
      </div>
    );

  return (
    <section className="job-details">
      <div className="job-details__container">
        <div>
          <h1>{job.name}</h1>
          <div className="job-details__info">
            <img src={userIcon} />
            <p>{job.company.name}</p>
          </div>
          <div className="job-details__info">
            <img src={pinIcon} />
            <p>{job.locations[0]?.name}</p>
          </div>
          <div className="job-details__info">
            <img src={userIcon} />
            <p>{job.levels[0]?.name}</p>
          </div>
          <button className="job-details__btn" onClick={handleApplyClick}>
            Aplicar
          </button>
        </div>
        <img className="job-details__img" src={companyImg} />
      </div>

      <div
        className="job-details__contents"
        dangerouslySetInnerHTML={{ __html: job.contents }}
      ></div>
    </section>
  );
}

export default JobDetails;
