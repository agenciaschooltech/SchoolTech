import "./styles.scss";
import WrapperImg from "../../assets/wrapper.png";
import BtnPrimary from "../BtnPrimary";

function CardCourse(prop) {
  function openCourseResume() {
    window.open(`/courses/${prop.keyId}`, "_self");
  }

  return (
    <div className="card-wallper">
      <img src={WrapperImg} />
      <div className="card">
        <div className="profissao-categoria">
          <h3>{prop.titleCard}</h3>
          <div
            className="profissao-todas-categorias"
            title="categoria do curso"
          >
            <p>Front-end</p>
            <p>3 meses</p>
          </div>
        </div>
        <BtnPrimary
          clickNow={openCourseResume}
          title="Ver Curso"
          widthBtn="100%"
        />
      </div>
    </div>
  );
}

export default CardCourse;
