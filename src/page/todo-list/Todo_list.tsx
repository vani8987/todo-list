import { useEffect, useState } from "react";
import Task from "./component/task/task";
import Shape from "./component/shape/Shape";
import Todo from "./component/todo/todo";


interface TypeShapeTask {
    title: string
    description: string
}

function TodoList() {
    const [stateType, setStateType] = useState<string>("urgent") 
    const [nameTypeTask, setNameTypeTask] = useState<string>("urgent")
    const [urgent, setUrgent] = useState<TypeShapeTask[]>(JSON.parse(localStorage.getItem('urgent')!) || []) 
    const [not_urgent, setNot_urgent] = useState<TypeShapeTask[]>(JSON.parse(localStorage.getItem('not_urgent')!) || []) 
    const [archive, setArchive] = useState<TypeShapeTask[]>(JSON.parse(localStorage.getItem('archive')!) || [])
    const [TaskStateReturn, setTaskStateReturn] = useState<any[]>([])
    const [data, setData] = useState<TypeShapeTask>({title: "", description: ""})

    useEffect(() => {
        if (nameTypeTask === "urgent") {
            const TaskMap = urgent.map((item, index) => {
                return <Task 
                item={item} 
                key={index} 
                id={index} 
                deletTask={deletTask}
                />
            })
            setTaskStateReturn(TaskMap)
        
        } else if (nameTypeTask === "not_urgent") {
            const TaskMap = not_urgent.map((item, index) => {
                return <Task 
                item={item} 
                key={index} 
                id={index} 
                deletTask={deletTask}
                />
            })
            setTaskStateReturn(TaskMap)
        } else {
            const TaskMap = archive.map((item, index) => {
                return <Task 
                item={item} 
                key={index} 
                id={index} 
                deletTask={deletTask}
                />
            })
            setTaskStateReturn(TaskMap)
        }

        localStorage.setItem("urgent", JSON.stringify(urgent))
        localStorage.setItem("not_urgent", JSON.stringify(not_urgent))
        localStorage.setItem("archive", JSON.stringify(archive))

    }, [urgent, not_urgent, archive, nameTypeTask])

    const HandlerTypeTaskState = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setStateType(event.target.value)
    }

    const HandlerNameTypeTask = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setNameTypeTask(event.target.value)
    }

    const HandlerTitle = (event:React.ChangeEvent<HTMLInputElement>):void => {
        data.title = event.target.value
    }

    const HandlerDescription = (event:React.ChangeEvent<HTMLTextAreaElement>):void => {
        data.description = event.target.value
    }

    const Submit = (event:any): void => {
        event.preventDefault()
        if (stateType === "urgent") {
            setUrgent((prevTasks) => [...prevTasks, data]);
        } else if (stateType === "not_urgent") {
            setNot_urgent((prevTasks) => [...prevTasks, data]);
        } else {
            setArchive((prevTasks) => [...prevTasks, data]);
        }
        setData({title: "", description: ""})
        setStateType("urgent")
        event.target.reset();
    }

    const deletTask = (id: number):void => {
        if (nameTypeTask === "urgent") {
            setUrgent(prevData => prevData.filter((none, index) => index !== id))
        } else if (nameTypeTask === "not_urgent") {
            setNot_urgent(prevData => prevData.filter((none, index) => index !== id))
        } else {
            setArchive(prevData => prevData.filter((none, index) => index !== id))
        }
    }
    
    return (
        <div className="Todo_list">
            <div className="containerShape">
                <Shape HandlerTypeTaskState={HandlerTypeTaskState } HandlerTitle={HandlerTitle} HandlerDescription={HandlerDescription} Submit={Submit}/>
            </div>
            <div className="containerTodo">
                <Todo 
                HandlerNameTypeTask={HandlerNameTypeTask} 
                nameTypeTask={nameTypeTask} 
                TaskStateReturn={TaskStateReturn}
                />
            </div>
        </div>
    );
}

export default TodoList