import './CardCourse.css'

import WrapperImg from './assets/wrapper.jpg'

function CardCourse(prop) {
  return (
    <div className="card">
      <img src={prop?.imgCard || WrapperImg} />
      <h3>{prop.titleCard}</h3>
      <p>{prop.descCard}</p>
      <a href={prop?.urlCard || "#"} className="btn-agendar" style={{width: "100%"}}>Ver Curso</a>
    </div>
  );
}

export default CardCourse;