import BtnPrimary from "../../components/BtnPrimary";
import "./styles.scss";

function Contact() {
  return (
    <div className="contact">
      <h2>Bem-vindo(a) ao suporte</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        impedit quas? Non delectus ut, voluptate praesentium perferendis in quod
        nam quasi corporis provident dignissimos incidunt consequatur eos quam
        molestiae unde.
      </p>
      <div className="btn-redes">
        <BtnPrimary
          title="Conversar no Whatsapp"
          clickNow={() =>
            window.open(
              "https://api.whatsapp.com/message/WJC7F2B6W6CXE1?autoload=1&app_absent=0",
              "_blank"
            )
          }
        />

        <BtnPrimary
          title="Conversar no Instagram"
          clickNow={() =>
            window.open(
              "https://www.instagram.com/agencia_school_tech/",
              "_blank"
            )
          }
        />

        <BtnPrimary
          title="Última edição LiveCode"
          clickNow={() =>
            window.open(
              "https://agenciaschooltech.github.io/livecoding-inscricao/",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
}

export default Contact;
