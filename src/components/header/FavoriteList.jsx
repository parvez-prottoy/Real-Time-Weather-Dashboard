import FavoriteItem from "./FavoriteItem";

const FavoriteList = () => {
  return (
    <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
      <FavoriteItem />
    </ul>
  );
};

export default FavoriteList;
