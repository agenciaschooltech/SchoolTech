import { CourseContent } from "../../components/CourseContent";
import CourseVideoItem from "../../components/CourseVideoItem";
import "./CourseDetails.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ListIcon from "../../components/Icons/ListIcon";

export default function CourseDetails() {

    const params = useParams();
    const [isOpen, setIsOpen] = useState(true);
    const course = params?.course;
    const courseTitle = "Python POO";
    const lesson = params?.lesson;
    const lessonTitle = "01 - Introdução ao Python";
    const introductionText = "Introdução ao curso";

    const content = {
        videoUrl: "https://www.youtube.com/embed/x7X9w_GIm1s?si=udzMFgLEmafoqACL",
        description: `
        Lorem ipsum dolor sit amet consectetur id dolorem laudantium eius a adipisci. 
        Quisquam natus corrupti deleniti adipisci et totam commodi.
        lorem ipsum dolor sit amet consectetur id dolorem laudantium eius a adipisci.
        quisquam natus corrupti deleniti adipisci et totam commodi.
        `
    }
    console.log({ course, lesson });

    return (
        <div className="course-details-container">
            <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
                <ListIcon width={"auto"} height={"auto"}/>
            </button>
            <aside className={`list ${isOpen ? '' : 'close'}`}>
                <div className="list-header">
                    <h1 className="course-title">{courseTitle}</h1>
                </div>
                <ul>
                    <CourseVideoItem title={introductionText} introduction selected={!lesson} url={"/courses/" + course} />
                    {new Array(20).fill(CourseVideoItem).map((CourseVideo, index) => (
                        <li key={index}>
                            <CourseVideo 
                            title={"Aula " + (index + 1).toString().padStart(2, "0")} 
                            duration={index.toString().padStart(2, "0") + ":00"} 
                            url={`/courses/${course}/${index}`}
                            selected={lesson == index}
                            />
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="details">
                <header className="details-header">
                    <h2 className="lesson-title">{lessonTitle}</h2>
                </header>
                <CourseContent {...content}/>
            </main>
        </div>
    )
}