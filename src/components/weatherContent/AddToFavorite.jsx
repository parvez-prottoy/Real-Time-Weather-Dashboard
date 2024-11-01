import { useContext, useState } from "react";
import heart from "../../assets/heart.svg";
import heartRed from "../../assets/heart-red.svg";
import { WeatherContext } from "../../contexts/weatherContext";
import { FavoriteContext } from "../../contexts/favoriteContext";
const AddToFavorite = () => {
  const { weather } = useContext(WeatherContext);
  const { latitude, longitude, location } = weather;
  const { favorites, addToFavorite, removeToFavorite } =
    useContext(FavoriteContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    const found = favorites.find((fav) => fav.location === location);
    if (!found) {
      addToFavorite(latitude, longitude, location);
    } else {
      removeToFavorite(location);
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavorite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>
            {isFavorite ? "Remove " : "Add "}
            to Favourite
          </span>

          <img src={isFavorite ? heartRed : heart} alt="heart" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavorite;
