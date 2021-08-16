import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { calculateDay } from '../utils/calculations';

const Forecast = () => {
    //  Constants
    const today = new Date();
    let stringDay;

    //  Local states
    const [response, setResponse] = useState();

    //  Global states
    const dark = useSelector(state => state.theme);

    //  Day names
    const selectDay = (day) => {

        let theDay;

        if (day > 7) {
            theDay = day - 7;
        } else {
            theDay = day;
        }

        stringDay = calculateDay(theDay, 'eng');

        return stringDay;
    }

    useEffect(() => {
        const getData = () => {
            // const lat = '4.707'
            // const lon = '-74.107'
            // const api_key = '0b79dea464b8f769b18696de8de31770';
            // const base_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${ lat }&lon=${ lon }&exclude=minutely,hourly&appid=${ api_key }&units=metric`;
            // // const base_url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&lang=es&appid=${ api_key }&units=metric`;
            // const xhttp = new XMLHttpRequest();
            // var json;
        
            // xhttp.open('GET', base_url, true);
        
            // xhttp.send();
        
            // xhttp.onreadystatechange = function() {
            //     if (this.readyState === 4 && this.status === 200) {
            //         json = JSON.parse(this.response);
            //         setResponse(json);
            //     }
            // }
        }
        // getData();
        console.log(response);
        // eslint-disable-next-line
    }, [])

    return (
    <>
        <section className={dark ? "forecast shadow-light" : "forecast shadow-dark"}>
            <h3 className={dark ? "cast-title color-light" : "cast-title"}><span>3 days</span> forecast</h3>

            <div className="days">
                <div className="sub-section">
                    <img 
                        src={`https://openweathermap.org/img/w/${response?.daily[0].weather[0].icon}.png`} 
                        alt="weather1"
                        className="" />
                </div>
                <div className="sub-section">
                    <h5 className="day">{selectDay(today.getDay() + 1)}</h5>
                    <p className={dark ? "description color-light" : "description"}><strong>{response?.daily[0].weather[0].description}</strong></p>
                </div>
                <div className="sub-section">
                    <span className="temp-max">{Math.round(response?.daily[0].temp.max)}&#8451;</span>
                    <span className="temp">/</span>
                    <span className="temp-min">{Math.round(response?.daily[0].temp.min)}&#8451;</span>
                </div>
            </div>
            <div className="days">
                <div className="sub-section">
                    <img 
                        src={`https://openweathermap.org/img/w/${response?.daily[1].weather[0].icon}.png`}
                        alt="weather2"
                        className="" />
                </div>
                <div className="sub-section">
                    <h5 className="day">{selectDay(today.getDay() + 2)}</h5>
                    <p className={dark ? "description color-light" : "description"}><strong>{response?.daily[1].weather[0].description}</strong></p>
                </div>
                <div className="sub-section">
                    <span className="temp-max">{Math.round(response?.daily[1].temp.max)}&#8451;</span>
                    <span className="temp">/</span>
                    <span className="temp-min">{Math.round(response?.daily[1].temp.min)}&#8451;</span>
                </div>
            </div>
            <div className="days">
                <div className="sub-section">
                    <img 
                        src={`https://openweathermap.org/img/w/${response?.daily[2].weather[0].icon}.png`} 
                        alt="weather3"
                        className="" />
                </div>
                <div className="sub-section">
                    <h5 className="day">{selectDay(today.getDay() + 3)}</h5>
                    <p className={dark ? "description color-light" : "description"}><strong>{response?.daily[2].weather[0].description}</strong></p>
                </div>
                <div className="sub-section">
                    <span className="temp-max">{Math.round(response?.daily[2].temp.max)}&#8451;</span>
                    <span className="temp">/</span>
                    <span className="temp-min">{Math.round(response?.daily[2].temp.min)}&#8451;</span>
                </div>
            </div>
        </section>        
    </>
    )
}

export default Forecast;
