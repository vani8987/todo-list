import "./header.scss"
import { CiSearch } from "react-icons/ci";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

interface HeaderType {
    swipeTheme: () => void
    Theme: string
}

const Header:React.FC<HeaderType> = ({swipeTheme, Theme}) => {
    return ( 
        <div className="Header" >
            <div className="Header_Logo">
                <h1>Todo List</h1>
            </div>
            <div className="Header_search">
                <input type="text" />
                <CiSearch className="search" />
            </div>
            <label className="switch">
                <input type="checkbox" checked={Theme === "dark" ? false : true} onChange={swipeTheme} />
                <span className="slider"></span>
                
                <IoMdSunny className="sunIcon" id={Theme === "dark" ? "" : "opasityIcon"}/>
                <FaMoon className="moonIcon" id={Theme === "dark" ? "opasityIcon" : ""}/>
            </label>
        </div>
    );
}
 
export default Header;