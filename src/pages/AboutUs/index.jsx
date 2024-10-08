import { useState } from "react";
import AboutUsContainer from "../../components/AboutUsContainer";
import BtnPrimary from "../../components/BtnPrimary";
import CardMessage from "../../components/CardMessage";
import SectionAboutUs from "../../components/SectionAboutUs";
import "./AboutUs.scss";

const usersData = [
  {
    name: "Nicolas",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores aperiam quaerat quo consectetur aliquid culpa, dolore, itaque quas aspernatur fugit fuga explicabo libero provident recusandae, ipsam quos ipsa laboriosam?",
  },

  {
    name: "Nicolas",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores aperiam quaerat quo consectetur aliquid culpa, dolore, itaque quas aspernatur fugit fuga explicabo libero provident recusandae, ipsam quos ipsa laboriosam?",
  },

  {
    name: "Nicolas",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores aperiam quaerat quo consectetur aliquid culpa, dolore, itaque quas aspernatur fugit fuga explicabo libero provident recusandae, ipsam quos ipsa laboriosam?",
  },

  {
    name: "Nicolas",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores aperiam quaerat quo consectetur aliquid culpa, dolore, itaque quas aspernatur fugit fuga explicabo libero provident recusandae, ipsam quos ipsa laboriosam?",
  },

  {
    name: "Nicolas",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores aperiam quaerat quo consectetur aliquid culpa, dolore, itaque quas aspernatur fugit fuga explicabo libero provident recusandae, ipsam quos ipsa laboriosam?",
  },

  {
    name: "Nicolas",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores aperiam quaerat quo consectetur aliquid culpa, dolore, itaque quas aspernatur fugit fuga explicabo libero provident recusandae, ipsam quos ipsa laboriosam?",
  },

  {
    name: "Nicolas",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores aperiam quaerat quo consectetur aliquid culpa, dolore, itaque quas aspernatur fugit fuga explicabo libero provident recusandae, ipsam quos ipsa laboriosam?",
  },

  {
    name: "Nicolas",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores aperiam quaerat quo consectetur aliquid culpa, dolore, itaque quas aspernatur fugit fuga explicabo libero provident recusandae, ipsam quos ipsa laboriosam?",
  },

  {
    name: "Nicolas",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores aperiam quaerat quo consectetur aliquid culpa, dolore, itaque quas aspernatur fugit fuga explicabo libero provident recusandae, ipsam quos ipsa laboriosam?",
  },

  {
    name: "Nicolas",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores aperiam quaerat quo consectetur aliquid culpa, dolore, itaque quas aspernatur fugit fuga explicabo libero provident recusandae, ipsam quos ipsa laboriosam?",
  },
];

const AboutUs = () => {
  const [users] = useState(usersData);

  return (
    <div className="container-about">
      <AboutUsContainer saibaMais={false} />
      <h2 className="title-about-us" id="top-about">
        Descubra mais sobre nós 👀
      </h2>

      <div className="section-duvidas">
        <SectionAboutUs
          title="Oque fazemos?"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            esse alias nemo possimus modi placeat. Impedit debitis, ratione
            animi nisi nam cum exercitationem repellendus quod alias at,
            consequatur, commodi unde?"
        />

        <SectionAboutUs
          title="Nosso objetivo"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            esse alias nemo possimus modi placeat. Impedit debitis, ratione
            animi nisi nam cum exercitationem repellendus quod alias at,
            consequatur, commodi unde?"
        />

        <SectionAboutUs
          title="Nossa história"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            esse alias nemo possimus modi placeat. Impedit debitis, ratione
            animi nisi nam cum exercitationem repellendus quod alias at,
            consequatur, commodi unde?"
        />
      </div>

      <h2 className="title-about-us">Conheça sobre o LiveCode</h2>

      <div className="section-duvidas">
        <SectionAboutUs
          title="Oque é LiveCode?"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            esse alias nemo possimus modi placeat. Impedit debitis, ratione
            animi nisi nam cum exercitationem repellendus quod alias at,
            consequatur, commodi unde?"
        />

        <SectionAboutUs
          title="Como funciona?"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            esse alias nemo possimus modi placeat. Impedit debitis, ratione
            animi nisi nam cum exercitationem repellendus quod alias at,
            consequatur, commodi unde?"
        />

        <SectionAboutUs
          title="Como começou?"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            esse alias nemo possimus modi placeat. Impedit debitis, ratione
            animi nisi nam cum exercitationem repellendus quod alias at,
            consequatur, commodi unde?"
        />
      </div>

      <h2 className="title-about-us">Equipe School Tech</h2>

      <div className="section-duvidas">
        <SectionAboutUs
          title="Como trabalhamos?"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            esse alias nemo possimus modi placeat. Impedit debitis, ratione
            animi nisi nam cum exercitationem repellendus quod alias at,
            consequatur, commodi unde?"
        />

        <SectionAboutUs
          title="Como é o respeito do time?"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            esse alias nemo possimus modi placeat. Impedit debitis, ratione
            animi nisi nam cum exercitationem repellendus quod alias at,
            consequatur, commodi unde?"
        />

        <SectionAboutUs
          title="Como resolvemos problemas?"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            esse alias nemo possimus modi placeat. Impedit debitis, ratione
            animi nisi nam cum exercitationem repellendus quod alias at,
            consequatur, commodi unde?"
        />
      </div>

      <h2 className="title-about-us">Nossos alunos</h2>

      <div className="section-duvidas">
        <SectionAboutUs
          title="Oque planjeamos para o futuro?"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            esse alias nemo possimus modi placeat. Impedit debitis, ratione
            animi nisi nam cum exercitationem repellendus quod alias at,
            consequatur, commodi unde?"
        />

        <SectionAboutUs
          title="Como são as aulas?"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            esse alias nemo possimus modi placeat. Impedit debitis, ratione
            animi nisi nam cum exercitationem repellendus quod alias at,
            consequatur, commodi unde?"
        />

        <SectionAboutUs
          title="Aprendo mesmo rápido?"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            esse alias nemo possimus modi placeat. Impedit debitis, ratione
            animi nisi nam cum exercitationem repellendus quod alias at,
            consequatur, commodi unde?"
        />

        <SectionAboutUs
          title="Como funciona?"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            esse alias nemo possimus modi placeat. Impedit debitis, ratione
            animi nisi nam cum exercitationem repellendus quod alias at,
            consequatur, commodi unde?"
        />
      </div>

      <h2 className="title-about-us">Oque achou da nossa história?</h2>
      <div className="thanks">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          esse alias nemo possimus modi placeat. Impedit debitis, ratione animi
          nisi nam cum exercitationem repellendus quod alias at, consequatur,
          commodi unde?
        </p>
      </div>

      <div className="btn-top">
        <BtnPrimary
          title="Voltar para o topo"
          widthBtn="60%"
          clickNow={() => {
            window.open("#top-about", "_self");
          }}
        />
      </div>

      <div className="comentarios-alunos-container">
        <h2 className="title-about-us">Comentários de alunos</h2>
        <div className="all-messages">
          {users.map((i, index) => (
            <CardMessage key={index} conteudo={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
