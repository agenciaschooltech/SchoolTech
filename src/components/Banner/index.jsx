import './Banner.css'

import HeroRightBannerImg from './assets/logo.jpeg'

function Banner() {
  return (
    <section className="banner">
      <div className="text-banner">
        <h2>A melhor plataforma<br />para aprender programação!</h2>
        <p>
          Encontre todo tipo de conteúdo tecnológico aqui,<br />
          com professores prontos para te ajudar a qualquer momento do dia.<br/>
          Conheça nossa plataforma, faça uma mentoria gratuita!
        </p>

        <a href="#">Agendar Mentoria</a>
      </div>

      <div className="image-wallpaper">
        <img src={HeroRightBannerImg} alt="Imagem de códigos de programação" />
      </div>
    </section>
  );
}

export default Banner;