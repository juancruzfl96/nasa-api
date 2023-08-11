import { useFavorites } from "../customHooks/useFavorites";
import NoPhotos from "../components/NoPhotos";

const Favorites = () => {
  const { arrayFavorites, deleteFavorites } = useFavorites();

  return (
    <>
      <div className="header" >
        <p style={{ fontSize: "30px", fontWeight: "500" }}>Favoritos</p>
        <a href="/" className="buttonHome">
          Home
        </a>
      </div>
      <div className="containerCards">
        {arrayFavorites.length !== 0 ? (
          arrayFavorites?.map((elem) => (
            <div key={elem.id} className="card">
              <img src={elem.img_src} height="300px" width="300px" />
              <button onClick={() => deleteFavorites(elem.id)}>
                Quitar de favoritos
              </button>
            </div>
          ))
        ) : (
          <NoPhotos text={"No hay favorito guardado"} />
        )}
      </div>
    </>
  );
};

export default Favorites;
