import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack } from '@mui/material';
import { PasswordElement, TextFieldElement } from 'react-hook-form-mui';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../firebase';
import classes from '../styles/SingIn.module.css';
import { Client } from '../interfaces/interfaces';
import LoginSchema from '../data/validationScheme/loginSchema';

function SignInPage() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(LoginSchema()),
  });
  // const { register, handleSubmit, formState } = form;
  // const { errors } = formState;
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const loginUser = (data: Pick<Client, 'email' | 'firstPassword'>) => {
    logInWithEmailAndPassword(data.email, data.firstPassword);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate('/MainPage');
  }, [user, loading]);

  return (
    <section className={classes.section}>
      <div className={classes.login}>
        <div className={classes.login__container}>
          <h1 className={classes.title}>Вход в Аккаунт</h1>
          <form
            className={classes.form}
            onSubmit={handleSubmit(loginUser)}
            noValidate
          >
            <Stack spacing={2} sx={{ minWidth: '320px' }}>
              <TextFieldElement
                name="email"
                label="E-mail"
                control={control}
                required
                fullWidth
                helperText=" "
              />
              <PasswordElement
                name="firstPassword"
                label="Password"
                control={control}
                helperText=" "
              />
              <Button
                sx={{
                  '&&': {
                    width: '15%',
                    minWidth: '100px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                }}
                variant="contained"
                type="submit"
                disabled={!isValid}
              >
                Submit
              </Button>
            </Stack>
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
    </section>
  );
}

export default SignInPage;
