import { useState } from "react";
import { carmeraTypes } from "../helpers/cameraTypes";
import PropTypes from "prop-types";

const Dropdown = ({ setParamsCamera, paramsCamera }) => {
  const [selectedOption, setSelectedOption] = useState(
    carmeraTypes.filter((elem) => elem.Abbreviation === paramsCamera)[0]?.id
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (elem) => {
    setSelectedOption(elem.id === selectedOption ? null : elem.id);
    setParamsCamera(
      elem.Abbreviation === paramsCamera ? null : elem.Abbreviation
    );
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button className="buttonHeader" onClick={handleModal}>
        Filtros de camara
      </button>
      {isOpen && (
        <div className="cameraFilter">
          {carmeraTypes.map((elem) => (
            <div key={elem.id} className="cameraFilterOptions">
              <input
                style={{ marginRight: "10px", width: "25px", height: "25px" }}
                type="checkbox"
                checked={elem.id === selectedOption}
                onChange={() => handleCheckboxChange(elem)}
              />
              <p>{elem.camera}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  setParamsCamera: PropTypes.func.isRequired,
  paramsCamera: PropTypes.string,
};

export default Dropdown;
