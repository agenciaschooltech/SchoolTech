import "./styles.scss";

// eslint-disable-next-line react/prop-types
function SectionAboutUs({ title = "", desc = "" }) {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default SectionAboutUs;
