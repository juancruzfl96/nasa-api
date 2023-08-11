import InfiniteScroll from "react-infinite-scroll-component";
import SearchSol from "./SearchSol";
import SearchEarchDate from "./SearchEarthDate";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

import { usePhotos } from "../customHooks/usePhotos";
import { useFavorites } from "../customHooks/useFavorites";
import NoPhotos from "./NoPhotos";

const Dashboard = ({ rover, camera, sol, date }) => {
  const { addFavorites, checkFavorite } = useFavorites();
  const [searchParams, setSearchParams] = useSearchParams();

  const { photos, hasNextPage, loading, page, setPage } = usePhotos({
    rover,
    camera,
    sol,
    date,
  });

  const setParamDate = (newDate) => {
    setSearchParams({
      ...(rover && { rover }),
      date: newDate,
      ...(camera && { camera }),
    });
  };

  const setParamSol = (newSol) => {
    setSearchParams({
      ...(rover && { rover }),
      sol: newSol,
      ...(camera && { camera }),
    });
  };

  return (
    <div style={{ backgroundColor: "white", height: "100%" }} data-testid='dashboard-container'>
      <div
        style={{
          margin: "40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "400px" }}>
          <SearchEarchDate setDateSelected={setParamDate} dateSelected={date} />
          <SearchSol setSolDistance={setParamSol} solDistance={sol} />
        </div>
        <div>
          <a href="favoritos" className="favoriteButton">
            FAVOTIROS
          </a>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        {loading ? (
          <h3>Cargando...</h3>
        ) : (
          <>
            {photos?.length > 0 ? (
              <InfiniteScroll
                dataLength={photos.length}
                next={() => setPage(page + 1)}
                hasMore={hasNextPage}
                loader={<h4>Cargando...</h4>}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center",
                    padding: "25px 0",
                  }}
                >
                  {photos?.map((elem) => (
                    <div key={elem.id} className="card">
                      <img src={elem.img_src} height="300px" width="300px" />
                      <button
                        disabled={checkFavorite(elem.id)}
                        onClick={() => addFavorites(elem)}
                      >
                        Agregar favoritos
                      </button>
                    </div>
                  ))}
                </div>
              </InfiniteScroll>
            ) : (
              <NoPhotos text={"No se ha encontrado fotos"} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  rover: PropTypes.string.isRequired,
  camera: PropTypes.string,
  sol: PropTypes.string,
  date: PropTypes.string,
};

export default Dashboard;
