import { useState } from "react";
import searchIcon from "../../images/searchIcon.svg";

function SearchForm({ handleCompany }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCompany(searchTerm);
    setSearchTerm("");
  };

  return (
    <section className="search">
      <form onSubmit={handleSubmit} className="search__form">
        <div className="search__container">
          <div className="search__box">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Company"
              className="search__input"
            />
            <img src={searchIcon} alt="Search Icon" />
          </div>
          <button
            type="submit"
            className={`search__button ${
              !searchTerm ? "search__button-disable" : ""
            }`}
            disabled={!searchTerm.trim()}
          >
            Search Jobs
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
