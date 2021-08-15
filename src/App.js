import { useState } from "react";
import Custom from "./components/Custom";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import ParisBanner from "./components/ParisBanner";
import Preload from "./components/Preload";
import './styles/sass/styles.css';

function App() {

  const [loaded, setLoaded] = useState(false);

  window.addEventListener('load', () => {
    setLoaded(true);
  })

  return (
    <>
      {loaded ?
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
        :
        <>
          <Preload/>
        </>
      }   
    </>
  );
}

export default App;
