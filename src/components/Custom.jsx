import { useState } from "react";
import { dataEnglish , dataSpanish } from "../utils/constants"

const Custom = () => {

    //  Local states
    const [lookPlace, setLookPlace] = useState(false);

    const clickButton = () => {
        setLookPlace(true);
    }

    return (
    <>
        <section className="custom">
            {lookPlace ?
                
                <select 
                    name="country" 
                    id="select-country"
                    className="country">
                    <option value="">Select a value</option>
                    <option value="co">Colombia</option>
                    <option value="ar">Argentina</option>
                    <option value="bo">Bolivia</option>
                </select>
            :
                <button 
                className="button pointer trans-300"
                onClick={clickButton}>
                {dataEnglish.custom.btn}</button>
            }

        </section>   
    </>
    )
}

export default Custom
