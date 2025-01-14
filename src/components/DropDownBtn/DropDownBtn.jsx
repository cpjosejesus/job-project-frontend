import { useState } from "react";
import dropdownBtn from "../../images/Dropdown.svg";

function DropDownBtn({ btnName, handleSelection, elements }) {
  const [isDropDownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="dropdown">
      <button
        type="button"
        className="dropdown__button"
        onClick={() => setIsDropdownOpen(!isDropDownOpen)}
      >
        {btnName}
        <img
          src={dropdownBtn}
          className={`dropdown__icon ${
            isDropDownOpen ? "dropdown__icon-rotated" : ""
          }`}
          alt="dropdown icon"
        />
      </button>
      {isDropDownOpen && (
        <ul className="dropdown__list">
          {elements.map((element, idx) => (
            <li
              key={idx}
              className="dropdown__item"
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
