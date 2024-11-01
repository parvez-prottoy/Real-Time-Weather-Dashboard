import { useContext } from "react";
import WeatherBodyItem from "./WeatherBodyItem";
import { WeatherContext } from "../../contexts/weatherContext";
import cloudyIcon from "../../assets/icons/cloud.svg";
import humidityIcon from "../../assets/icons/humidity.svg";
import tempMaxIcon from "../../assets/icons/temp-max.svg";
import tempMinIcon from "../../assets/icons/temp-min.svg";
import windIcon from "../../assets/icons/wind.svg";

const WeatherBody = () => {
  const { weather } = useContext(WeatherContext);
  const {
    climate,
    cloudPercentage,
    humidity,
    maxTemperature,
    minTemperature,
    wind,
  } = weather;
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        the climate is {}
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <WeatherBodyItem
          text="Temp max"
          value={maxTemperature}
          icon={tempMaxIcon}
        />
        <WeatherBodyItem
          text="Temp min"
          value={minTemperature}
          icon={tempMinIcon}
        />
        <WeatherBodyItem text="Humadity" value={humidity} icon={humidityIcon} />
        <WeatherBodyItem
          text="Cloudy"
          value={cloudPercentage}
          icon={cloudyIcon}
        />
        <WeatherBodyItem text="Wind" value={wind} icon={windIcon} />
      </ul>
    </div>
  );
};

export default WeatherBody;
