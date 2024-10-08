import { useNavigate, useParams } from "react-router-dom";
import "./ResumeCourse.scss";
import {
  checkLoginState,
  getAllCourses,
  statusLogin,
} from "../../utils/helpers";
import BtnPrimary from "../../components/BtnPrimary";
import ImgCourse from "../../assets/wrapper.png";
import { useState } from "react";

function ResumeCourse() {
  const params = useParams();
  const courseParams = params?.resume;
  const [addList, setAddList] = useState("+ Salvar");

  const courseInfo = getAllCourses().filter((e) => {
    return e.keyId == courseParams;
  })[0];

  const navigate = useNavigate();

  return (
    <div className="resume-course">
      <div className="img-and-title-prefacio">
        <div className="img-and-title-text">
          <h2>{courseInfo.titleCourse}</h2>

          <div className="info-course">
            <p>Tempo de duração</p>
            <p>Profissão</p>
            <p>Professor</p>
          </div>
        </div>
        <div className="img-prefacio">
          <img src={ImgCourse} />
          <BtnPrimary
            title={`${addList}`}
            widthBtn="100%"
            clickNow={() => {
              if (statusLogin) {
                if (addList == "+ Salvar") {
                  setAddList("Remover");
                } else {
                  setAddList("+ Salvar");
                }
              } else {
                navigate("/login");
              }
            }}
          />
        </div>
      </div>

      <div className="desc-course">
        <h3>Descrição do curso</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, optio
          dolorum, praesentium obcaecati dolorem ab esse nam consequatur ex
          itaque suscipit minus culpa recusandae laborum amet illum quidem est!
          Consequuntur.
        </p>
      </div>

      <div className="desc-course">
        <h3>Temas do cursos</h3>
        <p>Confira o conteúdo que você vai aprender neste curso:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div className="btn-resume-course">
        <BtnPrimary
          title="Obter curso"
          clickNow={() => {
            navigate(`/plans/${courseParams}`);
          }}
        />
        <BtnPrimary
          title="Agendar mentoria"
          clickNow={() => {
            checkLoginState(`/schedule-mentor/`);
          }}
        />
      </div>
    </div>
  );
}

export default ResumeCourse;
