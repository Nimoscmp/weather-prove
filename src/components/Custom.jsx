import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { dataEnglish , dataSpanish } from "../utils/constants"
import ShowPlace from "./ShowPlace";

const Custom = () => {

    //  Local states
    const [lookPlace, setLookPlace] = useState(false);
    const [clickedSearchBtn, setClickedSearchBtn] = useState(false);
    const [cityName, setCityName] = useState('');
    const [error, setError] = useState(false);

    //  Global states
    const dark = useSelector(state => state.theme);

    const clickButton = () => {
        setLookPlace(true);
    }

    const handleChange = e => {
        const removeAccents = (str) => {
            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }

        setCityName(
            [e.target.name] = removeAccents(e.target.value)
        );
    }

    const validate = () => {
        if (cityName.trim() === '') {
            setError(true);
            return;
        }

        setError(false);
    }

    const searchButton = () => {
        validate();
        setClickedSearchBtn(true);
    }

    useEffect(() => {
        if (clickedSearchBtn) {
            setClickedSearchBtn(false);
        }
    }, [clickedSearchBtn])

    return (
    <>
        <section className={dark ? "custom bg-city shadow-light" : "custom bg-city shadow-dark"}>
            <div className="fade"></div>
            <div className="title">
                <span>{dataEnglish.custom.title}</span>
            </div>
            <div className="content">
            {lookPlace ?
                <>
                    <label htmlFor="city">City</label>
                    <br/>
                    <input type="text" name="city" id="city" className="city" onChange={handleChange}/>
                    <button type="button" className="action-btn" onClick={searchButton}>Buscar</button>
                    <ShowPlace
                        clickedSearchBtn={clickedSearchBtn}
                        cityName={cityName}
                        error={error}
                    />
                </>
            :
                <button 
                className="button pointer trans-300"
                onClick={clickButton}>
                    <i className="fas fa-plus fa-2x"></i>
                </button>
            }
            </div>
        </section>   
    </>
    )
}

export default Custom
