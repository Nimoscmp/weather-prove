import Custom from "./components/Custom";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import ParisBanner from "./components/ParisBanner";
import './styles/sass/styles.css';

function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <MainBanner/>
        <div className="secondary">
          <Forecast/>
          <Custom/>
          <ParisBanner/>
        </div>
      </main>
    </>
  );
}

export default App;
