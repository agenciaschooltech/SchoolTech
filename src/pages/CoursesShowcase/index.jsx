import CoursesList from "../../components/CoursesList";

export default function CoursesShowcase() {

    const coursesGroups = [
        {
            name: "python",
            label: "Python",
            iconSrc: "/src/assets/python-icon.png",
            price: "99,99",
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
            price: "99,99",
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
            price: "99,99",
            courses: []
        }
    ]

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