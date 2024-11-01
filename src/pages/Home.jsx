import Header from "../components/header/Header";
import WeatherContent from "../components/weatherContent/WeatherContent";
import FavoriteProvider from "../providers/FavoriteProvider";
import WeatherProvider from "../providers/WeatherProvider";

const Home = () => {
  return (
    <WeatherProvider>
      <FavoriteProvider>
        <>
          <Header />
          <main>
            <WeatherContent />
          </main>
        </>
      </FavoriteProvider>
    </WeatherProvider>
  );
};

export default Home;
