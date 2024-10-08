import GoogleLogin from "../../components/LoginButtons/GoogleLogin";
import "./styles.scss";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <img
            src="/src/components/Banner/assets/logo.png"
            className="logo"
            alt="Logo School Tech"
          />
        </div>
        <div className="login-content">
          <h2>Cadastre-se para acessar a plataforma</h2>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
}
