import { useEffect, useState } from "react";
import Snowfall from 'react-snowfall'
import Header from "./components/header/header";
import Shape from "./components/shape/Shape";
import Todo from "./components/todo/todo";

interface TypeShapeTask {
    title: string
    description: string
}


function App() {
    const [Theme, setTheme] = useState<string>("dark")
    const [countSnow, setCountSnow] = useState<number>(900)
    const [stateType, setStateType] = useState<string>("urgent") 
    const [nameTypeTask, setNameTypeTask] = useState<string>("urgent")
    const [urgent, setUrgent] = useState<TypeShapeTask[]>([]) 
    const [not_urgent, setNot_urgent] = useState<TypeShapeTask[]>([]) 
    const [archive, setArchive] = useState<TypeShapeTask[]>([])
    const [data, setData] = useState<TypeShapeTask>({
        title: "",
        description: ""
    })

    const swipeTheme = ():void => {
        setTheme(Theme === "dark" ? "light" : "dark")
    }

    useEffect(() => {
        Theme === "dark" ? document.body.id = "dark" : document.body.id = "light"
        setTimeout(() => {
            setCountSnow(200)
        }, 6000)
    }, [Theme, nameTypeTask])

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
        setData({
            title: "",
            description: ""
        })
        event.target.reset();
    }

    return (
        <div className="App">
            <Snowfall snowflakeCount={countSnow}/>     
            <Header swipeTheme={swipeTheme} Theme={Theme}/>
            <div className="containerShape">
                <Shape HandlerTypeTaskState ={HandlerTypeTaskState } HandlerTitle={HandlerTitle} HandlerDescription={HandlerDescription} Submit={Submit}/>
            </div>
            <div className="containerTodo">
                <Todo HandlerNameTypeTask={HandlerNameTypeTask} nameTypeTask={nameTypeTask}/>
            </div>
        </div>
    );
}

export default App;
