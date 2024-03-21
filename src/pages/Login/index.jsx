import GoogleLogin from '../../components/LoginButtons/GoogleLogin';
import './styles.css';

export default function Login() {
    return (
        <div className='login-page'>
            <div className='login-container'>
                <div className='login-logo'>
                    <div className='img'>
                        <img
                        src="/src/components/Banner/assets/logo.png"
                        className='logo'
                        alt="Logo School Tech"
                        />
                    </div>
                </div>
                <div className='login-content'>
                    <h1>Cadastre-se para acessar a plataforma</h1>
                    <GoogleLogin/>
                </div>
            </div>
        </div>
    )
}