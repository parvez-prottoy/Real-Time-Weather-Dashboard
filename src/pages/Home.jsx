import Header from "../components/header/Header";
import WeatherContent from "../components/weatherContent/WeatherContent";
import WeatherProvider from "../providers/WeatherProvider";

const Home = () => {
  return (
    <WeatherProvider>
      <>
        <Header />
        <main>
          <WeatherContent />
        </main>
      </>
    </WeatherProvider>
  );
};

export default Home;
