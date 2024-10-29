import WeatherBodyList from "./WeatherBodyList";

const WeatherBody = () => {
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        thunderstorm with light drizzle
      </p>
      <WeatherBodyList />
    </div>
  );
};

export default WeatherBody;
