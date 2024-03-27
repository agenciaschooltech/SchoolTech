/* eslint-disable react/prop-types */
import "./CourseContent.css";

export const CourseContent = ({ videoUrl, description }) => {
    return (
        <div className='course-content'>
            <div className='course-video-container'>
                <iframe
                className="course-video"
                src={videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                />
            </div>
            <p className="lesson-description">{description}</p>
        </div>
    )
}