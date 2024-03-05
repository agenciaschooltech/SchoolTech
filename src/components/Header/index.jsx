import './Header.css'

function Header() {
  return (
    <header>
      <a href="#" style={{display: 'flex', alignItems: 'center'}}>
        <h1>SCHOOL TECH</h1>
      </a>

      <nav>
        <ul>
          <li>
            <a href="#">Cursos</a>
          </li>
          {/* <li>
            <a href="#">Serviços</a>
          </li> */}
          <li>
            <a href="#">Professores</a>
          </li>
          <li>
            <a href="#">Sobre Nós</a>
          </li>
          <li>
            <a href="#">Contatos</a>
          </li>
          <li id="btn-contact">
            <a href="#">Agendar Mentoria</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;