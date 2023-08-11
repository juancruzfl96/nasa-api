import "./index.css";
import { useSearchParams } from "react-router-dom";
import Dropdown from "./Dropdown";

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rover = searchParams.get("rover");
  const camera = searchParams.get("camera");

  const getUrl = (roverId) => {
    const date =
      searchParams.get("date") || new Date().toISOString().split("T")[0];
    const camera = searchParams.get("camera") || "";
    const sol = searchParams.get("sol") || "";

    return {
      rover: roverId,
      ...(date && { date }),
      ...(sol && { sol }),
      ...(camera && { camera }),
    };
  };

  const setParamCamera = (cameraId) => {
    const date =
      searchParams.get("date") || new Date().toISOString().split("T")[0];
    const rover = searchParams.get("rover") || "";
    const sol = searchParams.get("sol") || "";

    setSearchParams({
      ...(rover && { rover }),
      ...(date && { date }),
      ...(sol && { sol }),
      ...(cameraId && { camera: cameraId }),
    });
  };

  return (
    <div className="header" data-testid='header-container'>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Dropdown setParamsCamera={setParamCamera} paramsCamera={camera} />
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button
          className="buttonHeader"
          disabled={rover === "curiosity"}
          onClick={() => setSearchParams(getUrl("curiosity"))}
        >
          Curiosity
        </button>
        <button
          className="buttonHeader"
          disabled={rover === "opportunity"}
          onClick={() => setSearchParams(getUrl("opportunity"))}
        >
          Opportunity
        </button>
        <button
          className="buttonHeader"
          disabled={rover === "spirit"}
          onClick={() => setSearchParams(getUrl("spirit"))}
        >
          Spirit
        </button>
      </div>
    </div>
  );
};

export default Header;
