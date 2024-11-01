const WeatherBodyItem = ({ text, value, icon }) => {
  return (
    <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
      <span>{text}</span>
      <div className="inline-flex space-x-4">
        <p>{Math.round(value)}°</p>
        <img src={icon} alt="temp-max" />
      </div>
    </li>
  );
};

export default WeatherBodyItem;
