import { useEffect, useState } from "react";
import TodoList from "./page/todo-list/Todo_list";
import Header from "./components/header/header";
import Snowfall from "react-snowfall";


function App() {
    const [garland, setGarland] = useState<string>("gir_1")
    const [Theme, setTheme] = useState<string>(localStorage.getItem("Theme")!)
    const [countSnow, setCountSnow] = useState<number>(900)
    const [SnowfallIncluded, setSnowfallIncluded] = useState<boolean>(JSON.parse(localStorage.getItem('SnowfallIncluded')!))

    useEffect(() => {
        Theme === "dark" ? document.body.id = "dark" : document.body.id = "light"
        localStorage.setItem("Theme", Theme)

        setTimeout(() => {
            setCountSnow(200)
        }, 6000)
        localStorage.setItem("SnowfallIncluded", JSON.stringify(SnowfallIncluded))

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

    }, [Theme, garland, SnowfallIncluded])

    const swipeTheme = ():void => {
        setTheme(Theme === "dark" ? "light" : "dark")
    }

    const HandlerSnowfallIncluded = ():void => {
        setSnowfallIncluded(!SnowfallIncluded)
    }

    return (
        <div className="App">
            <div className={garland} id="gir"></div>
            {SnowfallIncluded && <Snowfall snowflakeCount={countSnow}/>}
            <Header swipeTheme={swipeTheme} Theme={Theme} HandlerSnowfallIncluded={HandlerSnowfallIncluded}/>
            <TodoList />
        </div>
    );
}

export default App;
