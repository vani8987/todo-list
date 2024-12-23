import "./Footer.scss"
import { FaGithub } from "react-icons/fa6";
import {Link} from 'react-router-dom';


const Footer = () => {
    return ( 
        <div className="Footer">
            <div className="Fotter_flex">
                <Link to="/">
                    <div className="Footer__listChanges">
                        <div className="Footer__listChanges-btn-Changes"></div>
                        <h2>Список изминений</h2>
                    </div>
                </Link>
                <div className="Footer__Git">
                    <a href="https://github.com/vani8987/todo-list">
                        <p>https://github.com/vani8987/todo-list</p>
                        <FaGithub className="Footer__Git-icon"/>
                    </a>
                </div>
                <div className="Footer__Version">
                    <h2>версия: 0.5</h2>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;