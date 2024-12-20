import { useEffect, useState } from "react";
import TodoList from "./page/todo-list/Todo_list";
import Header from "./components/header/header";
import SnowfallComponents from "./components/snowfall/Snowfall";
import GarlandComponent from "./components/garland/Garland";



function App() {
    const [Theme, setTheme] = useState<string>(localStorage.getItem("Theme")!)
    const [SnowfallIncluded, setSnowfallIncluded] = useState<boolean>(JSON.parse(localStorage.getItem('SnowfallIncluded')!))

    useEffect(() => {
        Theme === "dark" ? document.body.id = "dark" : document.body.id = "light"
        localStorage.setItem("Theme", Theme)
        localStorage.setItem("SnowfallIncluded", JSON.stringify(SnowfallIncluded))
    }, [Theme, SnowfallIncluded])

    const swipeTheme = ():void => {
        setTheme(Theme === "dark" ? "light" : "dark")
    }

    const HandlerSnowfallIncluded = ():void => {
        setSnowfallIncluded(!SnowfallIncluded)
    }

    return (
        <div className="App">
            <GarlandComponent />
            <SnowfallComponents SnowfallIncluded={SnowfallIncluded}/>
            <Header swipeTheme={swipeTheme} Theme={Theme} HandlerSnowfallIncluded={HandlerSnowfallIncluded}/>
            <TodoList />
        </div>
    );
}

export default App;
