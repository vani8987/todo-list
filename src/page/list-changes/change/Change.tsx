import "./Change.scss"
import { ListChangesType } from "../ListChanges"

interface ChangeType {
    item: ListChangesType
}


const Change:React.FC<ChangeType>  = ({item}) => {
    const text = item.change.split(".")
   
    const points = text.map((item) => {
        return <li><p>{item.trim()}</p></li>
    })
    return ( 
        <div className="Change" key={item.id}>
            <div className="Change__version">
                <h1>версия: {item.version}</h1>
                <div className="Change__list">
                    <ul>
                        {points}
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    );
}
 
export default Change;