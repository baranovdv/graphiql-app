import { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack } from '@mui/material';
import { PasswordElement, TextFieldElement } from 'react-hook-form-mui';
import { ToastContainer } from 'react-toastify';
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
    <section className={classes.section}>
      <h1 className={classes.title}>Вход в Аккаунт</h1>
      <form
        className={classes.form}
        onSubmit={handleSubmit(loginUser)}
        noValidate
      >
        <Stack spacing={2} sx={{ minWidth: '300px' }}>
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
          <Button
            sx={{
              '&&': {
                width: '50%',
                minWidth: '250px',
                marginLeft: 'auto',
                marginRight: 'auto',
              },
            }}
            variant="contained"
            type="button"
            onClick={signInWithGoogle}
          >
            Вход с помощью Google
          </Button>
          <div className={classes.noAcc}>
            Нет аккаунта? <Link to="/SignUp">Зарегистрируйтесь</Link> здесь.
          </div>
        </Stack>
      </form>
      <ToastContainer />
    </section>
  );
}

export default SignInPage;
