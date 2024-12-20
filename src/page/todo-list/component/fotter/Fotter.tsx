import "./footer.scss"
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return ( 
        <div className="Footer">
            <div className="Fotter_flex">
                <div className="Footer__Version">
                    <h2>версия: 0.9</h2>
                </div>
                <div className="Footer__Git">
                    <a href="https://github.com/vani8987/todo-list">
                        <p>https://github.com/vani8987/todo-list</p>
                        <FaGithub className="Footer__Git-icon"/>
                    </a>
                </div>
                <div className="Footer__listChanges">
                    <h2>Список изминений</h2>
                    <div className="Footer__listChanges-btn"></div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;