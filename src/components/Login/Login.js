import s from './Login.module.css'
import { Formik, Field, Form } from 'formik';

const LoginPage = () => {
    return (
        <div className={s.loginContainer}>
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                    rememberMe: false,
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <h2>Login</h2>
                    <div>
                        <Field id="login" name="login" placeholder="Login" />
                    </div>

                    <div>
                        <Field id="password" name="password" placeholder="Password" />
                    </div>

                    <div>
                        <label htmlFor="Remember me">Remember me</label>
                        <Field
                            id="rememberMe"
                            name="rememberMe"
                            type="checkbox"
                        />
                    </div>

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default LoginPage;