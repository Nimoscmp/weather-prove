import { useDispatch, useSelector } from "react-redux";
import { select_dark_theme_action , select_light_theme_action} from "../redux/actions/";

const Header = () => {

    const dispatch = useDispatch();
    const dark = useSelector(state => state.theme);

    const handleThemeClick = () => {
        if (dark) {
            dispatch(select_light_theme_action());
        } else {
            dispatch(select_dark_theme_action());
        }
    }

    return (
    <>
        <header className={dark ? "header bg-dark trans-300" : "header trans-300"}>
            <nav className="nav">
                <div className={dark ? "language color-light-gray" : "language color-gray"}>
                    <span 
                        className="pointer"
                        >ENG</span>
                    <span>|</span>
                    <span 
                        className="pointer"
                        >ESP</span>
                </div>
                <div className="theme">
                    <i 
                        className={dark ? "fas fa-adjust fa-2x trans-300 pointer rotate-180 color-light" : "fas fa-adjust fa-2x trans-300 pointer"}
                        onClick={handleThemeClick}
                        ></i>
                </div>
            </nav>
        </header>
    </>
    )
}

export default Header;
