import "./MyCourses.css";
import CoursesList from "../../components/CoursesList";
import { coursesGroups } from "../../mock/coursesGroups";

export default function MyCourses() {

    return (
        <main className="my-courses" style={{ padding: "20px" }}>
            <CoursesList
            coursesGroups={coursesGroups}
            emptyCoursesMessage={(
                <p>Você ainda não possui este curso. Adquira agora na <a href="/courses-showcase">Vitrine de Cursos</a>.</p>
            )}
            />
        </main>
    )
}