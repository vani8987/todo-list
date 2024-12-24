import "./footer.scss"
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return ( 
        <div className="Footer">
            <div className="Fotter_flex">
                <div className="Footer__Version">
                    <h2>версия: 0.5</h2>
                </div>
                <div className="Footer__Git">
                    <a href="https://github.com/vani8987/todo-list">
                        <p>https://github.com/vani8987/todo-list</p>
                        <FaGithub className="Footer__Git-icon"/>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;