import { FavoriteContext } from "../contexts/favoriteContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const addToFavorite = (latitude, longitude, location) => {
    setFavorites([
      ...favorites,
      {
        latitude,
        longitude,
        location,
      },
    ]);
  };
  const removeToFavorite = (location) => {
    const newFavorites = favorites.filter((item) => item.location !== location);
    setFavorites(newFavorites);
  };
  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorite, removeToFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
