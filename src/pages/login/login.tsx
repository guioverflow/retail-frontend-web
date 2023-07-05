import Header from '../../components/navbar';
import logo from '../../assets/logo.svg';
import LoginForm from './loginForm';

const Login = () => {
    return (
        <div className="App">
        <Header></Header>
        <header className="App-header">
        <LoginForm></LoginForm>
        </header>
        </div>
    )
}

export default Login;
