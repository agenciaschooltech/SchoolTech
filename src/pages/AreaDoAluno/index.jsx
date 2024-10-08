import { useState } from "react";
import "./styles.scss";
import AlunoHome from "../../components/AlunoHome";

function AreaDoAluno() {
  const [showOrHidden, setShowOrHidden] = useState("hidden");
  const [page, setPage] = useState("home");

  return (
    <div className="area-do-aluno">
      <div
        className="side-bar"
        onMouseEnter={() => {
          setTimeout(() => {
            const bar = document.querySelector(".side-bar");

            if (bar.clientWidth >= 360) {
              setShowOrHidden("show");
            }
          }, 300);
        }}
        onMouseLeave={() => {
          setShowOrHidden("hidden");
        }}
      >
        <div
          className="btn-side-bar"
          onClick={() => {
            setPage("perfil");
          }}
        >
          <button>Escon</button>
          <p className={showOrHidden}>Perfil</p>
        </div>

        <div
          className="btn-side-bar hidden"
          onClick={() => {
            setPage("meus cursos");
          }}
        >
          <button>Escon</button>
          <p className={showOrHidden}>Meus cursos</p>
        </div>

        <div
          className="btn-side-bar hidden"
          onClick={() => {
            setPage("minha lista");
          }}
        >
          <button>Escon</button>
          <p className={showOrHidden}>Minha lista</p>
        </div>
        <div
          className="btn-side-bar hidden"
          onClick={() => {
            setPage("mentorias");
          }}
        >
          <button>Escon</button>
          <p className={showOrHidden}>Mentorias</p>
        </div>
        <div
          className="btn-side-bar hidden"
          onClick={() => {
            setPage("suporte");
          }}
        >
          <button>Escon</button>
          <p className={showOrHidden}>Suporte</p>
        </div>
      </div>
      <div className="content-page">
        <AlunoHome page={page} />
      </div>
    </div>
  );
}

export default AreaDoAluno;
