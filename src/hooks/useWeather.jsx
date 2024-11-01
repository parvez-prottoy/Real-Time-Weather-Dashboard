import { useEffect } from "react";
import { useState } from "react";

export const useWeather = () => {
  const [weather, setWeather] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState({
    status: false,
    message: "",
  });
  const [error, setError] = useState(null);
  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        ...loading,
        status: true,
        message: "Fetching weather data...",
      });
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      setWeather({
        ...weather,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        status: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    let ignore = false;
    setLoading({
      ...loading,
      status: true,
      message: "Finding location...",
    });

    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      if (!ignore) {
        fetchWeatherData(latitude, longitude);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);
  return {
    weather,
    loading,
    error,
  };
};
