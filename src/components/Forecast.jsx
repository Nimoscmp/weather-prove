const Forecast = () => {

    const today = new Date();
    let stringDay;

    const selectDay = (day) => {

        let theDay;

        if (day > 7) {
            theDay = day - 7;
        } else {
            theDay = day;
        }

        switch (theDay) {
            case 1:
                stringDay = 'Monday';
                break;
            case 2:
                stringDay = 'Tuesday';
                break;
            case 3:
                stringDay = 'Wednesday';
                break;
            case 4:
                stringDay = 'Thursday';
                break;
            case 5:
                stringDay = 'Friday';
                break;
            case 6:
                stringDay = 'Saturday';
                break;
            case 7:
                stringDay = 'Sunday';
                break;
            default:
                stringDay = '';
                break;
        }

        return stringDay;
    }

    return (
    <>
        <section className="forecast">
            <h3 className="cast-title">3 days forecast</h3>

            <div className="days">
                <div className="sub-section">
                    <h5 className="day">{selectDay(today.getDay() + 1)}</h5>
                </div>
                <div className="sub-section">
                    <p className="temp"><small>Max</small></p>
                    <p className="temp-max">15&#8451;</p>
                </div>
                <div className="sub-section">
                    <p className="temp"><small>Min</small></p>
                    <p className="temp-min">10&#8451;</p>
                </div>
                <div className="sub-section">
                    <p className="description"><strong>Cloudy</strong></p>
                    <img 
                        src={'https://openweathermap.org/img/w/10d.png'} 
                        alt="weather1"
                        className="" />
                </div>
            </div>
            <div className="days">
                <div className="sub-section">
                    <h5 className="day">{selectDay(today.getDay() + 2)}</h5>
                </div>
                <div className="sub-section">
                    <p className="temp"><small>Max</small></p>
                    <p className="temp-max">16&#8451;</p>
                </div>
                <div className="sub-section">
                    <p className="temp"><small>Min</small></p>
                    <p className="temp-min">9&#8451;</p>
                </div>
                <div className="sub-section">
                    <p className="description"><strong>Rainy</strong></p>
                    <img 
                        src={'https://openweathermap.org/img/w/10d.png'} 
                        alt="weather2"
                        className="" />
                </div>
            </div>
            <div className="days">
                <div className="sub-section">
                    <h5 className="day">{selectDay(today.getDay() + 3)}</h5>
                </div>
                <div className="sub-section">
                    <p className="temp"><small>Max</small></p>
                    <p className="temp-max">19&#8451;</p>
                </div>
                <div className="sub-section">
                    <p className="temp"><small>Min</small></p>
                    <p className="temp-min">12&#8451;</p>
                </div>
                <div className="sub-section">
                    <p className="description"><strong>Sunny</strong></p>
                    <img 
                        src={'https://openweathermap.org/img/w/10d.png'} 
                        alt="weather3"
                        className="" />
                </div>
            </div>
        </section>        
    </>
    )
}

export default Forecast;
