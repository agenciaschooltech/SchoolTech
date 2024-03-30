/* eslint-disable react/prop-types */
import './CoursesList.css';
import CardCourse from '../CardCourse';

/*
    CoursesGroups Props = {
        name: string;
        label: string;
        iconSrc: string;
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

    return (
        <div className='courses-list-container'>
            {
                coursesGroups.map((group, i) => (
                    <div key={i+"."+group.name} style={{ width: "100%", display: "flex", flexDirection: "column"}}>
                        <header className='courses-list-header'>
                            <img src={group.iconSrc} alt='course-icon' className='course-icon'/>
                            <label className='course-label'>{group.label}</label>
                            {
                                showPrice && (
                                    <>
                                        <label className='course-price'>R$ {group.price}</label>
                                        <button role='button' className='btn-comprar'>Comprar</button>
                                    </>
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
                                    <CardCourse key={i+"."+course.title} {...course} readOnly={readOnlyCards} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}