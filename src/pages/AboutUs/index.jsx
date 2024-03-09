import './styles.css'

const AboutUs = () => {
  return (
    <div className='container-about'>
      <h2 id='title-about-us'>Descubra mais sobre nós 👀</h2>
      <div className='who'>
        <div className="who-container">
          <h2>Quem somos?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio esse alias nemo possimus modi placeat. Impedit debitis, ratione animi nisi nam cum exercitationem repellendus quod alias at, consequatur, commodi unde?</p>
        </div>
      </div>

      <div className="what-do">
        <div className="what-do-container">
          <h2>Oque fazemos?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio esse alias nemo possimus modi placeat. Impedit debitis, ratione animi nisi nam cum exercitationem repellendus quod alias at, consequatur, commodi unde?</p>
        </div>
      </div>

      <div className="fundadores">
        <h2>Fundadores da SchoolTech</h2>
        <div className="card-fundadores-container">
          <div className="card-fund-container">
            <div className="card-fund">
              <img src="https://www.automaxfiat.com.br/wp-content/uploads/2021/06/carros-economicos-1.jpeg" alt="Imagem do fundador Nicolas" />
              <h3>Mundo Inovador</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, doloribus! Quam, error? Minima dolores odio impedit error culpa iusto nihil, ex velit perferendis aperiam recusandae sit quo dolore facilis cum.</p>
            </div>
          </div>
          <div className="card-fund-container">
            <div className="card-fund">
              <img src="https://s2-autoesporte.glbimg.com/AD-Zmic9Id3pFylnmirMPJPqJXM=/0x0:1200x725/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/Y/Q/GDvW7QSNeaQ801rDC8Rg/hrv-movimentdianteira.jpg" alt="Imagem do fundador Nicolas" />
              <h3>Lucas Info Tech</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, doloribus! Quam, error? Minima dolores odio impedit error culpa iusto nihil, ex velit perferendis aperiam recusandae sit quo dolore facilis cum.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="video-about-us">
        <h2>Assista um resumo sobre a School Tech.</h2>

        <div className="video">
          <div className="video-container">
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/UDokv4o_n1o?si=DecKlHmhf7aMm7es"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              frameBorder={0}
              allowFullScreen
              style={{borderBottomLeftRadius: '2rem', borderTopRightRadius: '2rem'}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
