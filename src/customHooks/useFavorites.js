import { useState } from "react";
export const useFavorites = () => {


  const handleFavoritesLocalStorage = (id, value) => {
    localStorage.setItem(id, JSON.stringify(value));
  };

  const getElemFromLocalStorage = () => {
    const value = localStorage.getItem("favorites");
    return value ? JSON.parse(value) : null;
  };

  const [arrayFavorites, setFavoritos] = useState(
    getElemFromLocalStorage() || []
  );

  const addFavorites = (elem) => {
    const newArrayFavorites = [...arrayFavorites, elem];
    setFavoritos(newArrayFavorites);
    handleFavoritesLocalStorage("favorites", newArrayFavorites);
  };

  const checkFavorite = (id) => {
    return arrayFavorites.some((e) => e.id === id);
  };

  const deleteFavorites = (elemId) => {
    const newArrayFavorites = arrayFavorites.filter(
      (item) => item.id !== elemId
    );
    setFavoritos(newArrayFavorites);
    handleFavoritesLocalStorage("favorites", newArrayFavorites);
  };

  return { arrayFavorites, addFavorites, deleteFavorites, checkFavorite };
};
