import { useEffect, useState } from "react";
import "./ListChanges.scss"
import Change from "./change/Change";
import Footer from "./footer/Footer";

export interface ListChangesType {
    "version": string,
    "change": string,
    "id": number,
}

const ListChanges:React.FC = () => {
    const [ListChangesState, setListChangesState] = useState<ListChangesType[]>([])

    useEffect(() => {
        setListChangesState(require("./list-change.json"))
    }, [])

    const ListChangesMap = ListChangesState.map((item, index) => {
        return <Change item={item}/>
    })
    
    return ( 
        <div className="ListChanges">
            <div className="container">
                <h1>Список изминений</h1>
                <hr />
                {ListChangesMap}
            </div>
            <Footer />
        </div>
    );
}

export default ListChanges;