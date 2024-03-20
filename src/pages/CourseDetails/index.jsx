import CourseVideoItem from "../../components/CourseVideoItem";
import "./CourseDetails.css";
import { useParams } from "react-router-dom";

export default function CourseDetails() {

    const params = useParams();
    const course = params?.course;
    const courseTitle = "Python POO";
    const lesson = params?.lesson;
    const introductionText = "Introdução ao curso";
    console.log({ course, lesson });

    return (
        <div className="course-details-container">
            <nav className="list">
                <div className="list-header">
                    {courseTitle}
                </div>
                <ul>
                    <CourseVideoItem title={introductionText} introduction selected={!lesson} url={"/courses/" + course} />
                    {new Array(20).fill(CourseVideoItem).map((CourseVideo, index) => (
                        <li key={index}>
                            <CourseVideo 
                            title={"Aula " + index} 
                            duration={index.toString().padStart(2, "0") + ":00"} 
                            url={`/courses/${course}/${index}`}
                            selected={lesson == index}
                            />
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="details"> Sobre o curso </main>
        </div>
    )
}