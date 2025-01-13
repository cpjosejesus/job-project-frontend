import notFoundIcon from "../../images/not-found.svg";

function NotFound() {
  return (
    <div className="not-found">
      <img
        src={notFoundIcon}
        alt="No results found"
        className="not-found__icon"
      />
      <h2 className="not-found__title">No Results Found</h2>
      <p className="not-found__text">
        We couldnt find any jobs matching your search criteria
      </p>
    </div>
  );
}

export default NotFound;
