import temp from "../../assets/icons/temp-max.svg";
const WeatherBodyItem = () => {
  return (
    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
      <span>Temp max</span>
      <div className="inline-flex space-x-4">
        <p>19°</p>
        <img src={temp} alt="temp-max" />
      </div>
    </li>
  );
};

export default WeatherBodyItem;
