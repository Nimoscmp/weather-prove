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
                    <p className="description">Cloudy</p>
                </div>
                <div className="sub-section">
                    <p className="temp-max">Max</p>
                    <p className="temp">15&#8451;</p>
                </div>
                <div className="sub-section">
                    <p className="temp-min">Min</p>
                    <p className="temp">10&#8451;</p>
                </div>
                <div className="sub-section">

                </div>
            </div>
            <div className="days">
                <div className="sub-section">
                    <h5 className="day">{selectDay(today.getDay() + 2)}</h5>
                    <p className="description">Rainy</p>
                </div>
                <div className="sub-section">
                    <p className="temp-max">Max</p>
                    <p className="temp">16&#8451;</p>
                </div>
                <div className="sub-section">
                    <p className="temp-min">Min</p>
                    <p className="temp">9&#8451;</p>
                </div>
                <div className="sub-section">

                </div>
            </div>
            <div className="days">
                <div className="sub-section">
                    <h5 className="day">{selectDay(today.getDay() + 3)}</h5>
                    <p className="description">Sunny</p>
                </div>
                <div className="sub-section">
                    <p className="temp-max">Max</p>
                    <p className="temp">19&#8451;</p>
                </div>
                <div className="sub-section">
                    <p className="temp-min">Min</p>
                    <p className="temp">12&#8451;</p>
                </div>
                <div className="sub-section">

                </div>
            </div>
        </section>        
    </>
    )
}

export default Forecast;
