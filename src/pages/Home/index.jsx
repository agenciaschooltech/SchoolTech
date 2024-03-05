import './Home.css'

import Banner from "../../components/Banner";
import Course from "../../components/Course";
import Header from "../../components/Header";
import Footer from '../../components/Footer';


function Home() {
  return (
    <div className="home-container">
      <Header />
      <Banner />
      <section className="sobre-nos">
        <div className="text-sobre-nos">
          <h2>Sobre nós</h2>
          <p><span>Lorem ipsum dolor sit amet consectetur id dolorem laudantium eius a adipisci. Quisquam natus corrupti deleniti adipisci et totam commodi.</span><span>Voluptates aspernatur non, sit sunt harum eligendi voluptatibus nostrum nisi deleniti minima? Vel eveniet laboriosam quasi. Ullam, illo! Distinctio quas atque, corrupti architecto reprehenderit et delectus! Dolores vitae deleniti tempore?</span><span>Perspiciatis veritatis, ipsum in cumque tempore ut, placeat molestiae expedita consequatur veniam sed quos accusantium. Quis consequatur necessitatibus architecto animi eligendi, deleniti quia velit natus cum impedit nihil repellat iure!</span></p>
          <a href="#" className="btn-agendar">Primeira mentoria gratuita</a>
        </div>
        <div className="video-youtube">
          <h3>Conheça sobre a School-Tech</h3>
          <iframe
            width="600"
            height="400"
            src="https://www.youtube.com/embed/UDokv4o_n1o?si=DecKlHmhf7aMm7es"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder={0}
            allowFullScreen
            style={{borderRadius: 14}}
          />
        </div>
      </section>
      <Course />
      <Footer />
    </div>
  );
}

export default Home;