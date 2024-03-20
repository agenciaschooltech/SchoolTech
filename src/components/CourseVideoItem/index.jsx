/* eslint-disable react/prop-types */
import "./CourseVideoItem.css";
import PlayIcon from "../Icons/PlayIcon";
import LampIcon from "../Icons/LampIcon";
import { useNavigate } from "react-router-dom";

export default function CourseVideoItem({ title, duration, introduction = false, selected = false, url }) {
    
    const navigate = useNavigate();
    
    return (
        <span 
        className={`item-container ${selected ? "selected" : ""}`}
        onClick={() => navigate(url)}
        >
            {
                introduction
                    ? <LampIcon className="icon" width={40} height={40}/>
                    : <PlayIcon className="icon" width={40} height={40} />
            }
            <span className="item-info">
                <label className="title">{title}</label>
                { duration && <i className="duration">Duração: {duration}</i> }
            </span>
        </span>
    )
}