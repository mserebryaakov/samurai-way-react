import s from './Login.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';

const LoginPage = (props) => {

    if (props.auth === true) {
        return <Redirect to="/profile" />
    }

    return (
        <div className={s.loginContainer}>
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                    rememberMe: false,
                }}
                validationSchema={Yup.object({
                    login: Yup.string()
                        .email('Invalid email address')
                        .required('Required login'),
                    password: Yup.string()
                        .required('Required password'),
                })}
                onSubmit={async (values) => {
                    props.loginThunkCreator(values.login, values.password, values.rememberMe);
                }}
            >
                <Form>
                    <h3>Данные для теста:</h3>
                    <h3>Email: free@samuraijs.com</h3>
                    <h3>Password: free</h3>
                    <h2>Login</h2>
                    <div>
                        <Field id="login" name="login" placeholder="Login" />
                        <div>
                            <ErrorMessage name="login" />
                        </div>
                    </div>

                    <div>
                        <Field id="password" name="password" placeholder="Password" type="password"/>
                        <div>
                            <ErrorMessage name="password" />
                        </div>
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