import CoursesList from "../../components/CoursesList";
import { coursesGroups } from "../../mock/coursesGroups";

export default function CoursesShowcase() {

    return (
        <main className="courses-showcase" style={{ padding: "20px" }}>
            <CoursesList
            coursesGroups={coursesGroups}
            emptyCoursesMessage={"Em breve novos conteúdos serão adicionados."}
            readOnlyCards
            showPrice
            />
        </main>
    );
}