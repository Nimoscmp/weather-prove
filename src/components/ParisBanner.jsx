import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

const ParisBanner = () => {
    //  Local states
    const [response, setResponse] = useState();

    //  Global states
    const dark = useSelector(state => state.theme);

    useEffect(() => {
        const getData = () => {

            // const api_key = '0b79dea464b8f769b18696de8de31770';
            // // const base_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${ lat }&lon=${ lon }&exclude=minutely,hourly&appid=${ api_key }&units=${ units }`;
            // const base_url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&lang=es&appid=${ api_key }&units=metric`;
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
        <section className={dark ? "paris-banner shadow-light" : "paris-banner shadow-dark"}>
            <div className="fade"></div>
            <div className="title">
                <i className="fas fa-map-marker-alt fa-2x m-05"></i>
                <span className="city">Paris</span>
                <img 
                    src={`https://openweathermap.org/img/w/${ response?.weather[0].icon }.png`} 
                    alt="weather"
                    className="" />
            </div>
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

export default ParisBanner
