import { checkLoginState } from "../../utils/helpers";
import BtnPrimary from "../BtnPrimary";
import "./Header.scss";

function Header() {
  return (
    <header>
      <a href="/">
        <h1>SCHOOL TECH</h1>
      </a>

      <nav>
        <a href="/courses" className="link-nav">
          Cursos
        </a>
        <a href="/aboutus" className="link-nav">
          Sobre nós
        </a>
        <a href="/contact" className="link-nav">
          Contatos
        </a>
        <div className="child-end">
          <BtnPrimary
            title="Área do aluno"
            clickNow={() => {
              checkLoginState("/area_do_aluno");
            }}
          />
        </div>
        {/* <a href="#">Serviços</a> */}
      </nav>
    </header>
  );
}

export default Header;
