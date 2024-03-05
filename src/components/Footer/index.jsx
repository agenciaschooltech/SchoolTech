import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="text-footer-container">
        <h2>School-Tech &copy; Desenvolvivo por: <br /> <b>Mundo Inovador</b></h2>
        <p>Em parceria com: <br /> <b>Lschool Info Tech</b></p>
      </div>
      <div className="nav-footer">
        <ul>
          <li>
            <a href="#">Cursos</a>
          </li>
          <li>
            <a href="#">Professores</a>
          </li>
          <li>
            <a href="#">Sobre Nós</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;