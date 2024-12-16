import "./header.scss"
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";

interface HeaderType {
    swipeTheme: () => void
    Theme: string
    HandlerSnowfallIncluded: () => void
}

const Header:React.FC<HeaderType> = ({swipeTheme, Theme, HandlerSnowfallIncluded}) => {
    return ( 
        <div className="Header" >
            <div className="Header_Logo">
                <h1>Todo List</h1>
            </div>
            <div className="Header_Btn">
                <label className="switch">
                    <input type="checkbox" checked={Theme === "dark" ? false : true} onChange={swipeTheme} />
                    <span className="slider"></span>
                    <IoMdSunny className="sunIcon" id={Theme === "dark" ? "" : "opasityIcon"}/>
                    <FaMoon className="moonIcon" id={Theme === "dark" ? "opasityIcon" : ""}/>
                </label>
                <button onClick={HandlerSnowfallIncluded}><FaRegSnowflake className="SnowIcon"/></button>
            </div>
        </div>
    );
}
 
export default Header;