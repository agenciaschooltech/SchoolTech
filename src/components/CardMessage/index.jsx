import "./styles.scss";

// eslint-disable-next-line react/prop-types
const CardMessage = ({ conteudo = "" }) => {
  return (
    <div className="card-message">
      <div className="card-message-container">
        <h2>{conteudo.name}</h2>
        <p>{conteudo.message}</p>
      </div>
    </div>
  );
};

export default CardMessage;
