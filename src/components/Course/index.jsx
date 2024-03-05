import CardCourse from '../CardCourse';
import './Course.css'

function Course() {
  return (
    <section className="cursos-container">
      <h2>Cursos de Programação</h2>
      <div className="cursos">
        <CardCourse
          titleCard="Fundamentos Python"
          descCard="Aprenda toda a base do Python, tudo oque você precisa saber para começar com a linguagem, domine os fundamentos e crie projetos simples e divertidos enquanto aprende, para todo desenvolvedor começar a programar, precisa ter na ponta da lingua toda a base da linguagem, aprenda tudo isso aqui!"
        />
        <CardCourse
          titleCard="Python POO"
          descCard="Aprenda a trabalhar com objetos no Python, um dos principais conceitos da programação, transformar elementos em objetos, aprender esse conceito de POO (Programação Orientada a Objeto) abre várias portas no seu desenvolvimento, isso permite que você transforme qualquer coisa que você desenvolver em um objeto, atribuindo a eles funcionalidades únicas e inteligentes"
        />
        <CardCourse
          titleCard="Python UI"
          descCard="Aprenda a criar interfaces graficas através do Python usando a ferramenta (Kivy) criando interfaces desktop e mobile, junte todo seu conhecimento aprendido em Python e torne isso vizual para o usuario do seu sistema, crie um aplicativo para salões de festa usando o Kivy para praticar"
        />
        <CardCourse
          titleCard="React JS"
          descCard="Aprenda a criar web sites responsivos com o ReactJS, uma ferramenta gigante que te permite criar sites profissionais junto com o JavaScript, aprenda os principais conceitos dentro desde curso e crie um projeto prático de uma loja online."
        />
        <CardCourse
          titleCard="React Native"
          descCard="Aprenda a criar aplicativos mobile nativo com o (React Native), com essa ferramenta iremos criar 3 aplicativos dentro desse curso como projeto prático para praticar todo o conhecimento estudado, aprenda também como hospedar na (App Store e Play Store) criando aplicativos mobile para android e IOS."
        />
        <CardCourse
          titleCard="Python (Analise de Dados)"
          descCard="Aprenda a trabalhar com (analise de dados) através do Python, utilizando o frameword 'pandas', Crie um prójeto prático no fim do curso criando uma analise completa de uma empresa fantasia"
        />
      </div>
    </section>
  );
}

export default Course;
