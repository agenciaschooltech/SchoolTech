/* eslint-disable react/prop-types */
import "./styles.scss";

function BtnPrimary({
  title = "",
  colorTitle = "#2a1f5e",
  widthBtn = "auto",
  clickNow = () => {},
}) {
  return (
    <button
      onClick={clickNow}
      id="btn-primary"
      style={{
        color: colorTitle,
        borderColor: colorTitle,
        width: widthBtn,
        maxWidth: "600px",
      }}
    >
      {title}
    </button>
  );
}

export default BtnPrimary;
