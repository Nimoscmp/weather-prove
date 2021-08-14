import '../styles/sass/styles.css';

const MainBanner = () => {
    return (
    <>
        <section className="main-banner">
            <h5 className="title">
                <i className="fas fa-map-marker-alt mp-05"></i>
                <span className="m-05">Bogotá</span>
            </h5>
            <img 
                src={''} 
                alt="weather"
                className=""/>
            <span className="min-temp"></span>
            <span className="max-temp"></span>
        </section>           
    </>
    )
}

export default MainBanner;
