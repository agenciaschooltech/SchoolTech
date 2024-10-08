import "./styles.scss";
import HeroRightBannerImg from "./assets/logo.jpeg";
import BtnPrimary from "../BtnPrimary";
import { checkLoginState, statusLogin } from "../../utils/helpers";

function Banner() {
  return (
    <section className="banner">
      <div className="text-banner">
        <h2>
          A melhor plataforma
          <br />
          para aprender programação!
        </h2>
        <p>
          Encontre todo tipo de conteúdo tecnológico aqui,
          <br />
          com professores prontos para te ajudar a qualquer momento do dia.
          <br />
          Conheça nossa plataforma, faça uma mentoria gratuita!
        </p>

        <BtnPrimary
          title={!statusLogin ? "Login aqui" : "Área do aluno"}
          clickNow={() => {
            checkLoginState("/area_do_aluno/");
          }}
        />
      </div>

      <img src={HeroRightBannerImg} alt="Imagem de códigos de programação" />
    </section>
  );
}

export default Banner;
