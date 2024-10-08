import "./styles.scss";

export default function GoogleLogin() {
  return (
    <button className="btn-google-login">
      <img
        src="/src/components/LoginButtons/GoogleLogin/assets/google-icon.png"
        alt="Ícone Google"
        width="35"
        height="35"
      />
      <label className="btn-label">Entrar com Google</label>
    </button>
  );
}
