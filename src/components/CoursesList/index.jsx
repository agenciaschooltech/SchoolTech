/* eslint-disable react/prop-types */
import './CoursesList.css';
import CardCourse from '../CardCourse';
import { useNavigate } from 'react-router-dom';

/*
    CoursesGroups Props = {
        name: string;
        label: string;
        iconSrc: string;
        duration: string;
        courses: {
            imgCard: string | undefined;
            titleCard: string;
            descCard: string;
            urlCard: string;
        }[];
    }[];
    emptyCoursesMessage = string | ReactNode;
    readOnlyCards: boolean;
    showPrice: boolean;
*/

export default function CoursesList({ coursesGroups, emptyCoursesMessage, readOnlyCards, showPrice }) {

    const router = useNavigate();

    // Cursos que o usuário já possui.
    const userCourses = [];

    // Filtra os cursos que o usuário não possui.
    const coursesList = coursesGroups.filter((group) => !userCourses.includes(group.name));

    return (
        <div
        className='courses-list-container'
        style={ coursesList.length ? undefined : { height: "80vh", borderRadius: '20px', backgroundColor: '#BCCCFE' }}
        >
            {
                !coursesList.length ? (
                    <>
                        <p className='empty-courses-message empty-list' style={{ paddingBottom: '0', color: 'var(--primary-title-color)', fontWeight: 'bold' }}>
                            {"Em breve novos conteúdos serão adicionados... ;)"}
                        </p>
                        <img src='/src/assets/coding.gif' alt='coding-gif' className='coding-gif'/>
                    </>
                )
                : coursesList.map((group, i) => (
                    <div key={i+"."+group.name} style={{ width: "100%", display: "flex", flexDirection: "column"}}>
                        <header className='courses-list-header'>
                            <span className='course-title' onClick={() => router(`/courses/${group.name}`)}>
                                <img src={group.iconSrc} alt='course-icon' className='course-icon'/>
                                <span style={{ display: 'flex', flexDirection: 'column'}}>
                                    <label className='course-label'>{group.label}</label>
                                    <i className='course-duration'>Duração: {group.duration || "~~"}</i>
                                </span>
                            </span>
                            {
                                showPrice && (
                                    <span className='course-price-container'>
                                        {
                                            <>
                                                <label className='course-price'>R$ {group.price}</label>
                                                <button role='button' className='btn-comprar'>Comprar</button>
                                            </>
                                        }                                    
                                    </span>
                                    )
                            }
                        </header>
                        <div className='courses-list'>
                            {
                                !group.courses.length 
                                    ? (
                                        typeof emptyCoursesMessage === "string"
                                            ? <p className='empty-courses-message'> {emptyCoursesMessage} </p>
                                            : emptyCoursesMessage
                                    )
                                    : group.courses.map((course, i) => (
                                    <CardCourse
                                    key={i+"."+course.title}
                                    {...course}
                                    urlCard={`/courses/${group.name}/${i + 1}`}
                                    readOnly={readOnlyCards}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}