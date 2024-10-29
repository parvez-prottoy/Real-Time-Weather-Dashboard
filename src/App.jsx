import Home from "./pages/Home";
import body from "./assets/body-bg.png";

const App = () => {
  return (
    <div
      className={`bg-body font-[Roboto] text-light bg-[url(${body})] bg-no-repeat bg-cover h-screen grid place-items-center`}
    >
      <Home />
    </div>
  );
};

export default App;
