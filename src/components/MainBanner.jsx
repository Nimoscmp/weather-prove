import { useEffect, useState } from 'react';
// import { getData } from '../services/api/weatherApi';
import '../styles/sass/styles.css';

const MainBanner = () => {

    //  Constants
    const today = new Date();
    const hours = today.getHours();

    //  Local states
    const [isNight, setIsNight] = useState(false);
    const [response, setResponse] = useState();

    useEffect(() => {
        if ((hours >= 18 && hours <= 24) || (hours <= 0 && hours < 6)) {
            setIsNight(true);
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const getData = () => {

            // const api_key = '0b79dea464b8f769b18696de8de31770';
            // // const base_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${ lat }&lon=${ lon }&exclude=minutely,hourly&appid=${ api_key }&units=${ units }`;
            // const base_url = `https://api.openweathermap.org/data/2.5/weather?q=Bogota&lang=es&appid=${ api_key }&units=metric`;
            // const xhttp = new XMLHttpRequest();
            // var json;
        
            // xhttp.open('GET', base_url, true);
        
            // xhttp.send();
        
            // xhttp.onreadystatechange = function() {
            //     if (this.readyState === 4 && this.status === 200) {
            //         json = JSON.parse(this.response);
            //         setResponse(json);
            //         console.log(json);
            //     }
            // }
        }
        // getData();
        // console.log(response);
        // eslint-disable-next-line
    }, [])

    return (
    <>
        <section className={ isNight ? "main-banner bg-night" : "main-banner bg-day"}>
            <div className="fade"></div>
            <h5 className="title">
                <i className="fas fa-map-marker-alt fa-2x m-05"></i>
                <span className="city">Bogotá</span>
                <img 
                    src={`https://openweathermap.org/img/w/${ response?.weather[0].icon }.png`} 
                    alt="weather"
                    className="" />
            </h5>
            <div className="data">
                <div className="data-item">
                    <h5 className="h5">Temperatura</h5>
                    <span className="temp">{Math.round(response?.main.temp)}&#8451;</span>
                </div>
                <div className="data-item">
                    <h5 className="h5">Sensación térmica</h5>
                    <span className="temp">{Math.round(response?.main.feels_like)}&#8451;</span>
                </div>
                <div className="data-item">
                    <h5 className="h5">Nubosidad</h5>
                    <span className="temp">{Math.round(response?.clouds.all)}%</span>
                </div>
            </div>
        </section>           
    </>
    )
}

export default MainBanner;
