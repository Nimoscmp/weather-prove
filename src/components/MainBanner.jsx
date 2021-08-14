import { useEffect, useState } from 'react';
import { getData } from '../services/api/weatherApi';
import '../styles/sass/styles.css';

const MainBanner = () => {

    const [response, setResponse] = useState();

    // useEffect(() => {
    //     const getData = () => {

    //         const api_key = '0b79dea464b8f769b18696de8de31770';
    //         // const base_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${ lat }&lon=${ lon }&exclude=minutely,hourly&appid=${ api_key }&units=${ units }`;
    //         const base_url = `https://api.openweathermap.org/data/2.5/onecall?lat=4.707&lon=-74.107&exclude=minutely,hourly&appid=${ api_key }&units=metric`;
    //         const xhttp = new XMLHttpRequest();
    //         var json;
        
    //         xhttp.open('GET', base_url, true);
        
    //         xhttp.send();
        
    //         xhttp.onreadystatechange = function() {
    //             if (this.readyState === 4 && this.status === 200) {
    //                 json = JSON.parse(this.response);
    //                 setResponse(json);
    //                 console.log(json.lat);
    //             }
    //         }
    //     }
    //     getData();
    //     // eslint-disable-next-line
    // }, [])

    return (
    <>
        <section className="main-banner" >
            <h5 className="title">
                <i className="fas fa-map-marker-alt mp-05"></i>
                <span className="m-05">Bogotá</span>
            </h5>
            <div className="data">
                <img 
                    src={''} 
                    alt="weather"
                    className=""/>
                <div>
                    <h5>Temperatura</h5>
                    <span className="temp">29 &#8451;</span>
                </div>
                <div>
                    <h5>Sensación térmica</h5>
                    <span className="temp">30 &#8451;</span>
                </div>
                <div>
                    <h5>Nubes</h5>
                    <span className="feels-like">81%</span>
                </div>
            </div>
        </section>           
    </>
    )
}

export default MainBanner;
