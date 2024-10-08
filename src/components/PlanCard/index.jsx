/* eslint-disable react/prop-types */
import "./styles.scss";

function PlanCard({
  backgroundColorCard = "rgb(63, 177, 243)",
  backgroundColorBtn = "rgb(24, 121, 231)",
  textTitle = "Plano Bom",
  textPay = "R$32 - Mensal",
  descPlan = "Aprenda a programar com mais facilidade e eficiência.",
  onPlan = () => {},
}) {
  return (
    <div
      className="plan-card"
      style={{ backgroundColor: backgroundColorCard }}
      onClick={() => onPlan("#")}
    >
      <div className="title-and-value">
        <h2>{textTitle}</h2>
        <p>{textPay}</p>
      </div>
      <p>{descPlan}</p>
      <button style={{ backgroundColor: backgroundColorBtn }}>Quero!</button>
    </div>
  );
}

export default PlanCard;
