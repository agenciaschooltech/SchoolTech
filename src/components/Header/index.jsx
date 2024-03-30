import './Header.css'

function Header() {

  const isLoggedIn = true;

  const loggedInItems = [
    ['Meus Cursos', '/my-courses'],
    ['Vitrine de Cursos', '/courses-showcase'],
    ['Certificados', '#'],
  ]

  const loggedOutItems = [
    ['Cursos', '#'],
    ['Professores', '#'],
    ['Sobre Nós', '/aboutus'],
    ['Contatos', '#'],
  ]

  return (
    <header>
      <a href="/" style={{display: 'flex', alignItems: 'center'}}>
        <h1>SCHOOL TECH</h1>
      </a>

      <nav>
        <ul>
          {
            isLoggedIn
              ? loggedInItems.map(([title, url], i) => 
                <li key={i+"."+title}>
                  <a href={url}>{title}</a>
                </li>
              )
              : loggedOutItems.map(([title, url], i) => 
              <li key={i+"."+title}>
                <a href={url}>{title}</a>
              </li>
            )
          }
          <li id="btn-contact">
            <a href="#">Agendar Mentoria</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;