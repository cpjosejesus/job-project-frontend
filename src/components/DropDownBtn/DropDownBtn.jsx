import { useState } from "react";

import dropdownBtn from "../../images/Dropdown.svg";

function DropDownBtn({ btnName, handleSelection, elements }) {
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className=" drop-down__container category-wrapper">
      <button
        type="submit"
        className="category-button"
        onClick={() => setIsDropdownOpen(!isDropDownOpen)}
      >
        {btnName}
        <img
          src={dropdownBtn}
          className={`dropdown-icon ${isDropDownOpen ? "rotate" : ""}`}
        />
      </button>
      {isDropDownOpen && (
        <ul className="category-dropdown">
          {elements.map((element, idx) => (
            <li
              key={idx}
              className="category-item"
              onClick={() => {
                handleSelection(element);
                setIsDropdownOpen(false);
              }}
            >
              {element}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDownBtn;
