import FavoriteList from "./FavoriteList";

const FavoriteModal = () => {
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <FavoriteList />
    </div>
  );
};

export default FavoriteModal;
