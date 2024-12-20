import { useEffect } from "react";
import "./ListChanges.scss"
import Change from "./change/Change";


const ListChanges = () => {

    useEffect(() => {
        
    }, [])
    
    return ( 
        <div className="ListChanges">
            <div className="container">
                <h1>Список изминений</h1>
                <hr />
                <Change />
            </div>
        </div>
    );
}
 
export default ListChanges;