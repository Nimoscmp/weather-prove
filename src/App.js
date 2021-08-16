import { useState } from "react";
import { useSelector } from 'react-redux';
import Custom from "./components/Custom";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import ParisBanner from "./components/ParisBanner";
import Preload from "./components/Preload";
import './styles/sass/styles.css';

/*:::::::::::::::::::::::::
:::::::  COMPONENT  :::::::
:::::::::::::::::::::::::::*/

function App() {

  const [loaded, setLoaded] = useState(false);

  const dark = useSelector(state => state.theme);

  window.addEventListener('load', () => {
    setLoaded(true);
  })

  return (
    <>
      {loaded ?
        <>
          <Header/>
          <main className={dark ? "main bg-dark trans-300" : "main trans-300"}>
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
