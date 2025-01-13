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
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Company"
              className="search-input"
            />
            <img src={searchIcon} alt="Search Icon" />
          </div>
          <button
            type="submit"
            className={`search-button ${
              !searchTerm ? "search-button-disable" : ""
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
