import Forecast from "./components/Forecast";
import MainBanner from "./components/MainBanner";
import ParisBanner from "./components/ParisBanner";
import './styles/sass/styles.css';

function App() {
  return (
    <>
      <main className="main">
        <MainBanner/>
        <Forecast/>
        <ParisBanner/>
      </main>
    </>
  );
}

export default App;
