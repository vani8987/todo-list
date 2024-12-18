import { useEffect, useState } from "react";
import Snowfall from 'react-snowfall'
import Header from "./components/header/header";
import Shape from "./components/shape/Shape";
import Todo from "./components/todo/todo";
import Task from "./components/todo/task/task";

interface TypeShapeTask {
    title: string
    description: string
}

function App() {
    const [Theme, setTheme] = useState<string>(localStorage.getItem("Theme")!)
    const [countSnow, setCountSnow] = useState<number>(900)
    const [SnowfallIncluded, setSnowfallIncluded] = useState<boolean>(JSON.parse(localStorage.getItem('SnowfallIncluded')!))
    const [garland, setGarland] = useState<string>("gir_1")
    const [stateType, setStateType] = useState<string>("urgent") 
    const [nameTypeTask, setNameTypeTask] = useState<string>("urgent")
    const [urgent, setUrgent] = useState<TypeShapeTask[]>(JSON.parse(localStorage.getItem('urgent')!) || []) 
    const [not_urgent, setNot_urgent] = useState<TypeShapeTask[]>(JSON.parse(localStorage.getItem('not_urgent')!) || []) 
    const [archive, setArchive] = useState<TypeShapeTask[]>(JSON.parse(localStorage.getItem('archive')!) || [])
    const [TaskStateReturn, setTaskStateReturn] = useState<any[]>([])
    const [data, setData] = useState<TypeShapeTask>({title: "", description: ""})

    useEffect(() => {
        Theme === "dark" ? document.body.id = "dark" : document.body.id = "light"
        localStorage.setItem("Theme", Theme)
        
        setTimeout(() => {
            setCountSnow(200)
        }, 6000)
        localStorage.setItem("SnowfallIncluded", JSON.stringify(SnowfallIncluded))

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

        const intervalId = setTimeout(() => {
            setGarland((prevGarland) => {
              if (prevGarland === "gir_1") {
                return "gir_2";
              } else if (prevGarland === "gir_2") {
                return "gar_3";
              } else {
                return "gir_1";
              }
            });
        }, 350);
        return () => clearInterval(intervalId);
        
    }, [Theme, urgent, not_urgent, archive, nameTypeTask, SnowfallIncluded, garland])

    
    const swipeTheme = ():void => {
        setTheme(Theme === "dark" ? "light" : "dark")
    }

    const HandlerSnowfallIncluded = ():void => {
        setSnowfallIncluded(!SnowfallIncluded)
    }

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
        <div className="App">
            <div className={garland} id="gir"></div>
            {SnowfallIncluded && <Snowfall snowflakeCount={countSnow}/>}
            <Header swipeTheme={swipeTheme} Theme={Theme} HandlerSnowfallIncluded={HandlerSnowfallIncluded}/>
            <div className="containerShape">
                <Shape HandlerTypeTaskState ={HandlerTypeTaskState } HandlerTitle={HandlerTitle} HandlerDescription={HandlerDescription} Submit={Submit}/>
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

export default App;
