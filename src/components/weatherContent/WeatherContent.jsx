import { useContext } from "react";
import AddToFavorite from "./AddToFavorite";
import WeatherBody from "./WeatherBody";
import WeatherHead from "./WeatherHead";
import { WeatherContext } from "../../contexts/weatherContext";

const WeatherContent = () => {
  const { loading, error } = useContext(WeatherContext);
  let content;
  if (loading.status) {
    content = (
      <p className="text-green-500 text-lg font-bold">{loading.message}</p>
    );
  } else if (error) {
    content = <p className="text-green-500 text-lg font-bold">{error}</p>;
  } else {
    content = (
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          <AddToFavorite />
          <WeatherHead />
          <WeatherBody />
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="container">{content}</div>
    </section>
  );
};

export default WeatherContent;
