const ParisBanner = () => {
    return (
    <>
        <section className="paris-banner">
            <div className="fade"></div>
            <div className="title">
                <i className="fas fa-map-marker-alt fa-2x m-05"></i>
                <span className="city">Paris</span>
                <img 
                    src={'https://openweathermap.org/img/w/10d.png'} 
                    alt="weather"
                    className="" />
            </div>
            <div className="data">
                <div className="data-item">
                    <h5 className="h5">Temperatura</h5>
                    <span className="temp">29 &#8451;</span>
                </div>
                <div className="data-item">
                    <h5 className="h5">Sensación térmica</h5>
                    <span className="temp">30 &#8451;</span>
                </div>
                <div className="data-item">
                    <h5 className="h5">Nubosidad</h5>
                    <span className="temp">81%</span>
                </div>
            </div>
        </section>            
    </>
    )
}

export default ParisBanner
