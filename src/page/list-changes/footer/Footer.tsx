import "./Footer.scss"
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return ( 
        <div className="Footer">
            <div className="Fotter_flex">
                <div className="Footer__listChanges">
                    <div className="Footer__listChanges-btn"></div>
                    <h2>Список изминений</h2>
                </div>
                <div className="Footer__Git">
                    <a href="https://github.com/vani8987/todo-list">
                        <p>https://github.com/vani8987/todo-list</p>
                        <FaGithub className="Footer__Git-icon"/>
                    </a>
                </div>
                <div className="Footer__Version">
                    <h2>версия: 0.4</h2>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;