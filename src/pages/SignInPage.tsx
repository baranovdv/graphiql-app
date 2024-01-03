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
import { useLocale } from '../context/StoreContext';

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

  const { strings } = useLocale();

  const loginUser = (data: Pick<Client, 'email' | 'firstPassword'>) => {
    logInWithEmailAndPassword(data.email, data.firstPassword);
  };

  useEffect(() => {
    if (user) navigate('/MainPage');
  }, [user, loading, navigate]);

  if (user) return <Navigate to="/MainPage" replace />;
  return loading ? (
    <div>{strings.loading}</div>
  ) : (
    <section className={classes.section}>
      <h1 className={classes.title}>{strings.singin_page_title}</h1>
      <form
        className={classes.form}
        onSubmit={handleSubmit(loginUser)}
        noValidate
      >
        <Stack spacing={2} sx={{ minWidth: '300px' }}>
          <TextFieldElement
            name="email"
            label={strings.email}
            control={control}
            required
            fullWidth
            helperText=" "
          />
          <PasswordElement
            name="firstPassword"
            label={strings.password}
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
            {strings.signin_button}
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
            {strings.login_google}
          </Button>
          <div className={classes.noAcc}>
            {strings.no_acc_1} <Link to="/SignUp">{strings.no_acc_2}</Link>{' '}
            {strings.no_acc_3}
          </div>
        </Stack>
      </form>
      <ToastContainer />
    </section>
  );
}

export default SignInPage;
