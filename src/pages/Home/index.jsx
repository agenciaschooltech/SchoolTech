/* import "./Home.scss"; */
import Banner from "../../components/Banner";
import Course from "../../components/Course";
import AboutUsContainer from "../../components/AboutUsContainer";

function Home() {
  return (
    <div className="home-container">
      <Banner />

      <AboutUsContainer />

      {/* Pq aprender com a gente */}
      <Course />
      {/* Oque os alunos dizem */}
    </div>
  );
}

export default Home;
