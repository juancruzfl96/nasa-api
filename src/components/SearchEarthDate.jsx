import PropTypes from "prop-types";

const SearchEarchDate = ({ dateSelected, setDateSelected }) => {
  return (
    <div
      data-testid="date-input-container"
      style={{
        display: "flex",
        maxWidth: "450px",
        justifyContent: "space-between",
        marginBottom: "10px",
      }}
    >
      <p style={{ fontSize: "18px", fontWeight: "500", textAlign: "center" }}>
        {"Buscar por fecha de la tierra:"} <br /> {"(dd-mm-YYYY)"}{" "}
      </p>
      <input
        data-testid="date-input"
        value={dateSelected}
        type="date"
        style={{
          height: "35px",
          outline: "none",
          fontSize: "18px",
          textAlign: "center",
        }}
        max={new Date().toISOString().split("T")[0]}
        onChange={(e) => setDateSelected(e.target.value)}
      />
    </div>
  );
};

SearchEarchDate.propTypes = {
  dateSelected: PropTypes.string.isRequired,
  setDateSelected: PropTypes.func,
};

export default SearchEarchDate;
