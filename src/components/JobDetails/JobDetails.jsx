import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

import userIcon from "../../images/User.svg";
import pinIcon from "../../images/Pin.svg";
import PreLoader from "../Preloader/Preloader";

import api from "../../utils/MuseAPI";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [companyImg, setCompanyImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo(0, 0);

    api
      .getJobById(id)
      .then((res) => {
        setJob(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (job) {
      api
        .getCompanyById(job.company?.id)
        .then((res) => {
          setCompanyImg(res.refs.logo_image);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => setIsLoading(false));
    }
  }, [job]);

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
      {isLoading ? (
        <PreLoader />
      ) : (
        <div>
          <div className="job-details__container">
            <div>
              <h1 className="job-details__position">{job.name}</h1>
              <div className="job-details__info">
                <img src={userIcon} />
                <p className="job-details__company">{job.company.name}</p>
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
                Apply
              </button>
            </div>
            <img className="job-details__img" src={companyImg} />
          </div>
          <div className="job-details__contents">{parse(job.contents)}</div>
        </div>
      )}
    </section>
  );
}

export default JobDetails;
