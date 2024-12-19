import "./task.scss"
import {FaTrashAlt} from "react-icons/fa";

interface TypeShapeTask {
    title: string
    description: string
}

interface TypeTask {
    item: TypeShapeTask
    id: number
    deletTask: (id: number) => void
}

const Task:React.FC<TypeTask> = ({item, id, deletTask}) => {
    return ( 
        <>
            <div className="task" id={String(id)}>
                <div className="Task_header">
                    <div className="Header_title">
                        <h1>{item.title}</h1>
                    </div>
                    <div className="Header_btn">
                        <button onClick={(() => deletTask(id))}><FaTrashAlt className="iconTask"/></button>
                    </div>
                </div>
                <div className="row_description">
                    <p>{item.description}</p>
                </div>
            </div>
        </>
    );
}
 
export default Task;