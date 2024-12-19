import "./todo.scss"
import { BiSolidTimer } from "react-icons/bi";
import { TbClockPlus } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import EmptyTask from "../emptyTask/emptyTask";


interface TypeTodo {
    HandlerNameTypeTask: (event:React.ChangeEvent<HTMLInputElement>) => void
    HandlerValueSearch: (event:React.ChangeEvent<HTMLInputElement>) => void
    nameTypeTask: string
    emptyBoolea: boolean
    TaskStateReturn: any
}

const Todo:React.FC<TypeTodo> = ({HandlerNameTypeTask, nameTypeTask, TaskStateReturn, emptyBoolea, HandlerValueSearch}) => {
    const [nameTask, setNameTask] = useState("Срочные")

    useEffect(() => {
        if (nameTypeTask === "urgent") {
            setNameTask("срочные")
        } else if (nameTypeTask === "not_urgent") {
            setNameTask("не срочные")
        }  else {
            setNameTask("архив")
        }
    }, [nameTypeTask])
    
    return (
        <>
        <div className="Todo">
            <h1>{nameTask}</h1>
            <div className="Header_search">
                <input type="text" placeholder="Поиск" onChange={HandlerValueSearch}/>
                <CiSearch className="search" />
            </div>
            <div className="radioBtnsShape">
                <label>
                    <input type="radio" name="myRadio" value="urgent" onChange={HandlerNameTypeTask} defaultChecked/>
                    <BiSolidTimer className="iconradioBtn" />
                </label>
                <label>
                    <input type="radio" name="myRadio" onChange={HandlerNameTypeTask} value="not_urgent"/>
                    <TbClockPlus className="iconradioBtn"/>
                </label>
                <label>
                    <input type="radio" name="myRadio" onChange={HandlerNameTypeTask} value="archive"/>
                    <FaBoxOpen className="iconradioBtn"/>
                </label>
            </div>
        </div>
        <div className="Tasks">
            {TaskStateReturn}
        </div>
        {emptyBoolea && <div className="EmtptyTask">
            <EmptyTask />
        </div>}
        </>
    );
}
 
export default Todo;