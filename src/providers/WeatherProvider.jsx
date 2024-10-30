import { WeatherContext } from "../contexts/weatherContext";
import { useWeather } from "../hooks/useWeather";

const WeatherProvider = ({ children }) => {
  const { weather, loading, error } = useWeather();
  return (
    <WeatherContext.Provider value={{ weather, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
