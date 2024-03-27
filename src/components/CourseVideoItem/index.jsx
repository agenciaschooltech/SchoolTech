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
                    ? <LampIcon className="lamp-icon"/>
                    : <PlayIcon className="play-icon"/>
            }
            <span className="item-info">
                <span className="title">{title}</span>
                { duration && <i className="duration">Duração: {duration}</i> }
            </span>
        </span>
    )
}