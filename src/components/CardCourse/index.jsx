import './CardCourse.css'

import WrapperImg from './assets/wrapper.jpg'

function CardCourse(prop) {
  return (
    <div className="card-wallper">
      <div className="card">
        <img src={WrapperImg} />
        <h3>{prop.titleCard}</h3>
        <p>{prop.descCard}</p>
        <a href="#" className="btn-agendar" style={{width: "100%"}}>Ver Curso</a>
      </div>
    </div>
  );
}

export default CardCourse;