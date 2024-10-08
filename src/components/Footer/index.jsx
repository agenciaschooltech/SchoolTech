import "./styles.scss";
import BtnPrimary from "../BtnPrimary";
import { checkLoginState } from "../../utils/helpers";

function Footer() {
  return (
    <footer>
      <h2>
        School-Tech &copy; Desenvolvivo por: <br /> <b>Mundo Inovador</b>
      </h2>
      <div className="nav-footer">
        <a href="/courses">Cursos</a>
        <a href="/aboutus">Sobre Nós</a>
        <a href="/contact">Contato</a>
        <BtnPrimary
          title="Área do aluno"
          colorTitle="#a0a0c4"
          clickNow={() => {
            checkLoginState("/area_do_aluno");
          }}
        />
      </div>
    </footer>
  );
}

export default Footer;
