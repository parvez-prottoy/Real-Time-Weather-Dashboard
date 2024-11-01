import { useEffect, useState } from "react";

export const useLocalStorage = (storageKey, defaultValue) => {
  const [locations, setLocations] = useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
  );
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(locations));
  }, [locations, storageKey]);
  return [locations, setLocations];
};
