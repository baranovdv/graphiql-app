import { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer } from 'react-toastify';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../firebase';
import Footer from '../components/Footer/Footer';
import classes from '../styles/SingIn.module.css';
import { fieldsForLogin, loginSchema } from '../utils/utils';
import Label from '../components/label/Label';
import { Client } from '../interfaces/interfaces';
import LoginInput from '../components/input/LoginInput';

function SignInPage() {
  const form = useForm({
    defaultValues: async () => {
      return {
        email: '',
        firstPassword: '',
      };
    },
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const loginUser = (data: Pick<Client, 'email' | 'firstPassword'>) => {
    logInWithEmailAndPassword(data.email, data.firstPassword);
  };

  useEffect(() => {
    if (user) navigate('/MainPage');
  }, [user, loading, navigate]);
  if (user) return <Navigate to="/MainPage" replace />;
  return loading ? (
    <div>Loading</div>
  ) : (
    <>
      <main className={classes.main}>
        <div className={classes.login}>
          <div className={classes.login__container}>
            <h1 className={classes.title}>Вход в Аккаунт</h1>
            <form
              className={classes.form}
              onSubmit={handleSubmit(loginUser)}
              noValidate
            >
              {fieldsForLogin.map((field) => (
                <Label
                  className={classes.field}
                  htmlFor={field.id}
                  key={field.id}
                >
                  {field.label}
                  <div className={classes.wrapperInput}>
                    <LoginInput {...field} register={register} />
                    {errors[
                      field.id as keyof Pick<Client, 'email' | 'firstPassword'>
                    ]?.message && (
                      <p className={classes.error}>
                        {
                          errors[
                            field.id as keyof Pick<
                              Client,
                              'email' | 'firstPassword'
                            >
                          ]?.message
                        }
                      </p>
                    )}
                  </div>
                </Label>
              ))}
              <input className={classes.button} type="submit" value="Вход" />
            </form>
            <button
              type="button"
              className={(classes.login__btn, classes.login__google)}
              onClick={signInWithGoogle}
            >
              Вход с помощью Google
            </button>
            <div>
              Нет аккаунта? <Link to="/SignUp">Зарегистрируйтесь</Link> здесь.
            </div>
          </div>
        </div>
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
}

export default SignInPage;
