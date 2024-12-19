import "./shape.scss"
import { BiSolidTimer } from "react-icons/bi";
import { TbClockPlus } from "react-icons/tb";
import { FaBoxOpen } from "react-icons/fa";

interface ShapeType {
    HandlerTypeTaskState : (event:React.ChangeEvent<HTMLInputElement>) => void,
    HandlerTitle: (event:React.ChangeEvent<HTMLInputElement>) => void
    HandlerDescription: (event:React.ChangeEvent<HTMLTextAreaElement>) => void
    Submit: any 
}

const Shape:React.FC<ShapeType> = ({HandlerTypeTaskState , HandlerTitle, HandlerDescription, Submit}) => { 
    return ( 
        <form className="Shape" onSubmit={Submit}>
            <div className="inputShape">
                <input type="text"  placeholder="Ведите название" required onChange={HandlerTitle}/>
                <textarea name="Todo" id="Todo" placeholder="Введите вашу задачу" required onChange={HandlerDescription}></textarea>
            </div>
            <div className="radioBtnsShape">
                <label>
                    <input type="radio" name="myRadio" value="urgent" onChange={HandlerTypeTaskState} defaultChecked/>
                    <BiSolidTimer className="iconradioBtn" />
                </label>
                <label>
                    <input type="radio" name="myRadio" value="not_urgent" onChange={HandlerTypeTaskState}/>
                    <TbClockPlus className="iconradioBtn"/>
                </label>
                <label>
                    <input type="radio" name="myRadio" value="archive" onChange={HandlerTypeTaskState}/>
                    <FaBoxOpen className="iconradioBtn"/>
                </label>
            </div>
            <button >отправить</button>
        </form>
    );
}
 
export default Shape;