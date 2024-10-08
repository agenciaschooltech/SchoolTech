import "./styles.scss";
import { useState } from "react";
import { useEffect } from "react";
import BtnPrimary from "../BtnPrimary";

// eslint-disable-next-line react/prop-types
function AboutUsContainer({ saibaMais = true }) {
  const [widthScreen, setWidthScreen] = useState("60%");
  const [widthVideo] = useState("650");
  const [heightVideo, setHeightVideo] = useState("375");

  useEffect(() => {
    if (innerWidth <= 700) {
      setWidthScreen("80%");
    }

    if (innerWidth <= 500) {
      setWidthScreen("100%");
      setHeightVideo("250");
    }
  }, []);

  return (
    <section className="sobre-nos">
      <div className="text-sobre-nos">
        <h2>Sobre nós</h2>
        <p>
          Voluptates aspernatur non, sit sunt harum eligendi voluptatibus
          nostrum nisi deleniti minima? Vel eveniet laboriosam quasi. Ullam,
          illo! Distinctio quas atque, corrupti architecto reprehenderit et
          delectus! Dolores vitae deleniti tempore?
        </p>
      </div>

      <div className="video-youtube">
        <iframe
          width={widthVideo}
          height={heightVideo}
          src="https://www.youtube.com/embed/uRcELpTNxU4?si=xPxJfYSN27YaqkfC"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <h3>Conheça sobre a School-Tech</h3>
      </div>

      {saibaMais ? (
        <BtnPrimary
          title="Saiba mais"
          colorTitle="#a0a0c4"
          clickNow={() => {
            window.open("/aboutus", "_blank");
          }}
          widthBtn={widthScreen}
        />
      ) : (
        <span></span>
      )}
    </section>
  );
}

export default AboutUsContainer;
