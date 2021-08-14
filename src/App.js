import Forecast from "./components/Forecast";
import MainBanner from "./components/MainBanner";
import './styles/sass/styles.css';

function App() {
  return (
    <>
      <main className="main">
        <MainBanner/>
        <Forecast/>
      </main>
    </>
  );
}

export default App;
