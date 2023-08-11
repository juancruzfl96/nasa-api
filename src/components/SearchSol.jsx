import PropTypes from "prop-types";

const SearchSol = ({ setSolDistance, solDistance }) => {
  return (
    <div
      data-testid="sol-input-container"
      style={{
        display: "flex",
        maxWidth: "450px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "18px", fontWeight: "500" }}>
        {"Buscar por distancia sol:"}
      </p>
      <input
        data-testid="sol-input"
        value={solDistance}
        type="number"
        onChange={(e) => setSolDistance(e.target.value)}
        style={{
          width: "133px",
          height: "35px",
          outline: "none",
          fontSize: "18px",
          textAlign: "center",
        }}
      />
    </div>
  );
};

SearchSol.propTypes = {
  setSolDistance: PropTypes.func.isRequired,
  solDistance: PropTypes.string.isRequired,
};

export default SearchSol;
