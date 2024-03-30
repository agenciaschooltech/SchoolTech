import './CardCourse.css'

import WrapperImg from './assets/wrapper.jpg'

function CardCourse(prop) {

  const readOnlyStyle = prop?.readOnly ? {
    cursor: 'default'
  } : undefined;

  return (
    <div className="card" style={readOnlyStyle}>
      <img src={prop?.imgCard || WrapperImg}  style={readOnlyStyle}/>
      <h3 style={readOnlyStyle}>{prop.titleCard}</h3>
      <p style={readOnlyStyle}>{prop.descCard}</p>
      {
        !prop?.readOnly && (
          <a href={prop?.urlCard || "#"} className="btn-agendar" style={{width: "100%"}}>Ver Curso</a>
        )
      }
    </div>
  );
}

export default CardCourse;