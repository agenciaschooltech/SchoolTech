/* eslint-disable react/prop-types */
import "./styles.scss";
import BtnPrimary from "../BtnPrimary";

function AlunoHome({ page = "home" }) {
  return (
    <div className="area-aluno">
      {page === "home" && (
        <div className="home">
          <h1>
            Bem-vindo(a)! <br />
            Voce esta na area do aluno
          </h1>

          <p>
            Essa area e totalmente dedicada aos alunos, abaixo veja alguns
            botoes de atalho para navegar na area do aluno, gerencie todos seus
            cursos e agende todas suas mentorias diretamente por aqui, sempre
            que precisar, conte com a ajuda dos professores da SchoolTech, basta
            agendar uma mentoria e ter uma conversa muito pratica e produtiva!
          </p>

          <div className="atalho-home-area-aluno">
            <BtnPrimary title="Perfil" widthBtn="18%" />
            <BtnPrimary title="Meus cursos" widthBtn="18%" />
            <BtnPrimary title="Minha lista" widthBtn="18%" />
          </div>

          <div className="mentoria-home">
            <p>
              Caso voce precise de uma ajuda de um professor da SchoolTech
              agende uma mentoria, sua primeira mentoria sera gratuita entao
              aproveite para tirar duvidas sobre plano de carreira e como
              comecar na plataforma da forma certa!
            </p>
            <BtnPrimary title="Agendar mentoria" widthBtn="30%" />
          </div>
        </div>
      )}

      {page === "mentorias" && (
        <div className="home">
          <h1>
            Bem-vindo(a)! <br />
            Voce esta na mentoria dos alunos
          </h1>

          <div className="all-mentorias"></div>
        </div>
      )}
    </div>
  );
}

export default AlunoHome;
