import s from './Login.module.css'

const LoginForm = () => {
    return (
        <form>
            <div>
                <input placeholder='Login' />
            </div>
            <div>
                <input placeholder='Password' />
            </div>
            <div>
                <input type={"checkbox"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

function LoginPage() {
    return (
        <div className={s.content}>
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
}

export default LoginPage;