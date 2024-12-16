import "./task.scss"
interface TypeShapeTask {
    title: string
    description: string
}

interface TypeTask {
    item: TypeShapeTask
    id: number
}

const Task:React.FC<TypeTask> = ({item, id}) => {
    return ( 
        <div className="task" id={String(id)}>
            <div className="row_Title">
                <h1>{item.title}</h1>
            </div>
            <div className="row_description">
                <p>{item.description}</p>
            </div>
        </div>
    );
}
 
export default Task;