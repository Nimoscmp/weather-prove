import { useEffect, useState } from "react";

const ShowPlace = ({clickedSearchBtn, cityName, error}) => {
    
    const [showPlace, setShowPlace] = useState(false);
    const [errorResponse, setErrorResponse] = useState(false);
    const [response, setResponse] = useState();
    
    useEffect(() => {
        if (clickedSearchBtn) {

            const getData = (lang) => {
                console.log("Realizando busqueeda...");
                const api_key = '0b79dea464b8f769b18696de8de31770';
                // const base_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${ lat }&lon=${ lon }&exclude=minutely,hourly&appid=${ api_key }&units=${ units }`;
                const base_url = `https://api.openweathermap.org/data/2.5/weather?q=${ cityName }&lang=${ lang }&appid=${ api_key }&units=metric`;
                const xhttp = new XMLHttpRequest();
                var json;
            
                xhttp.open('GET', base_url, true);
            
                xhttp.send();
            
                xhttp.onreadystatechange = function() {
                    if (this.readyState === 4 && this.status === 200) {
                        json = JSON.parse(this.response);
                        setResponse(json);
                        console.log(json.lat);
                        setErrorResponse(false);
                    } else if (this.status !== 200) {
                        setErrorResponse(true);
                    }
                }
            }
            // getData();
            console.log(response);
        }
        // eslint-disable-next-line
    }, [clickedSearchBtn])

    return (
    <>
        <div>

            {showPlace && !error ?
            <>
                <div>
                    <i className="fas fa-map-marker-alt fa-2x m-05"></i>
                    <span className="city">{cityName}</span>
                    <img 
                        src={'https://openweathermap.org/img/w/10d.png'} 
                        alt="weather"
                        className="" />
                </div>
                <div>
                    <span>Cloudy</span>
                    <span className="temp-max">19&#8451;</span>
                    <span className="temp">/</span>
                    <span className="temp-min">12&#8451;</span>
                </div>
            </>
            : error ?
            <>
                <p>Digita correctamente</p>
            </>
            : errorResponse ?
            <>
                <p>Hubo un error en la búsqueda</p>
            </>
            :
            <>
                <p>Haz la busqueda</p>
            </>
            }

        </div>
    </>
    )
}

export default ShowPlace;