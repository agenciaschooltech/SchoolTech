import CoursesList from "../../components/CoursesList";
import "./MyCourses.css";

export default function MyCourses() {

    const coursesGroups = [
        {
            name: "python",
            label: "Python",
            iconSrc: "/src/assets/python-icon.png",
            courses: [
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"}
            ]
        },
        {
            name: "react",
            label: "React",
            iconSrc: "/src/assets/react-icon.png",
            courses: [
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"}
            ]
        },
        {
            name: "react-native",
            label: "React Native",
            iconSrc: "/src/assets/react-native-icon.png",
            courses: []
        }
    ]

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