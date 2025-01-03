import { useState } from "react";

function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchTerm);
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
              placeholder="Search Jobs"
              className="search-input"
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0918 17.5645L15.4352 13.9078C16.6161 12.4006 17.2554 10.5398 17.25 8.625C17.25 6.91914 16.7442 5.25159 15.7964 3.83321C14.8487 2.41484 13.5017 1.30935 11.9256 0.656543C10.3496 0.00373709 8.61544 -0.167067 6.94235 0.165731C5.26926 0.498528 3.73244 1.31998 2.52621 2.52621C1.31998 3.73244 0.498528 5.26926 0.165731 6.94235C-0.167067 8.61544 0.00373709 10.3496 0.656543 11.9256C1.30935 13.5017 2.41484 14.8487 3.83321 15.7964C5.25158 16.7442 6.91914 17.25 8.625 17.25C10.5398 17.2554 12.4006 16.6161 13.9078 15.4352L17.5645 19.0918C17.7679 19.2926 18.0423 19.4052 18.3281 19.4052C18.614 19.4052 18.8884 19.2926 19.0918 19.0918C19.1923 18.9916 19.2721 18.8726 19.3265 18.7416C19.3809 18.6105 19.4089 18.47 19.4089 18.3281C19.4089 18.1862 19.3809 18.0457 19.3265 17.9147C19.2721 17.7836 19.1923 17.6646 19.0918 17.5645ZM2.15625 8.625C2.15625 7.34561 2.53564 6.09494 3.24643 5.03116C3.95723 3.96738 4.96751 3.13826 6.14952 2.64866C7.33153 2.15905 8.63218 2.03095 9.887 2.28055C11.1418 2.53015 12.2944 3.14624 13.1991 4.05091C14.1038 4.95558 14.7199 6.1082 14.9695 7.36301C15.2191 8.61783 15.091 9.91848 14.6014 11.1005C14.1117 12.2825 13.2826 13.2928 12.2188 14.0036C11.1551 14.7144 9.9044 15.0938 8.625 15.0938C6.91011 15.0914 5.26614 14.4091 4.05353 13.1965C2.84092 11.9839 2.15863 10.3399 2.15625 8.625Z"
                fill="black"
              />
            </svg>
          </div>
          <button type="submit" className="search-button">
            Search Jobs
          </button>
          <button type="submit" className="search-button">
            Category
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
