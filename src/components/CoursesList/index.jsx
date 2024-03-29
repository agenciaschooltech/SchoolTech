import './CoursesList.css';
import CardCourse from '../CardCourse';

export default function CoursesList() {

    const coursesGroups = [
        {
            name: "python",
            label: "Python",
            iconSrc: "",
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
            iconSrc: "",
            courses: [
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"},
                {imgCard: undefined, titleCard: "Título", descCard: "Descricão", urlCard: "#"}
            ]
        }
    ]

    return (
        <div className='courses-list-container'>
            {
                coursesGroups.map((group, i) => (
                    <div key={i+"."+group.name}>
                        <header className='courses-list-header'>{group.label}</header>
                        <div className='courses-list'>
                            {
                                group.courses.map((course, i) => (
                                    <CardCourse key={i+"."+course.title} {...course} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}