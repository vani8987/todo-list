import { useEffect, useState } from "react";
import Snowfall from 'react-snowfall'
import Header from "./components/header/header";
import Shape from "./components/shape/Shape";

interface TypeShapeTask {
    title: string
    description: string
}


function App() {
    // стейты для смены темы и количесва снежинок
    const [Theme, setTheme] = useState<string>("dark")
    const [countSnow, setCountSnow] = useState<number>(900)
    const swipeTheme = ():void => {
        setTheme(Theme === "dark" ? "light" : "dark")
    }
    // стейты формы
    const [stateType, setStateType] = useState<string>("") 
    const [urgent, setUrgent] = useState<TypeShapeTask[]>([]) 
    const [not_urgent, setNot_urgent] = useState<TypeShapeTask[]>([]) 
    const [archive, setArchive] = useState<TypeShapeTask[]>([])
    const [data, setData] = useState<TypeShapeTask>({
        title: "",
        description: ""
    })


    useEffect(() => {
        // Смена темы и количесва снежинок
        Theme === "dark" ? document.body.id = "dark" : document.body.id = "light"
        setTimeout(() => {
            setCountSnow(200)
        }, 6000)
    }, [Theme])

    // Функционал формы
    const HandlerTypeTask = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setStateType(event.target.value)
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

    // TODO: исправить баг с первой задачей

    return (
        <div className="App">
            <Snowfall snowflakeCount={countSnow}/>     
            <Header swipeTheme={swipeTheme} Theme={Theme}/>
            <div className="container">
                <Shape HandlerTypeTask={HandlerTypeTask} HandlerTitle={HandlerTitle} HandlerDescription={HandlerDescription} Submit={Submit}/>
            </div>
        </div>
    );
}

export default App;
