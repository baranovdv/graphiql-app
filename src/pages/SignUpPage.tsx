import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Button, Stack } from '@mui/material';
import {
  PasswordElement,
  PasswordRepeatElement,
  TextFieldElement,
} from 'react-hook-form-mui';
import { Client } from '../interfaces/interfaces';
import classes from '../styles/SingUp.module.css';
import { useLocale } from '../context/StoreContext';
import { registerWithEmailAndPassword, auth } from '../firebase';
import RegistrationSchema from '../data/validationScheme/registrationSchema';

function SignUpPage() {
  const { strings } = useLocale();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(RegistrationSchema()),
  });

  const [user, loading] = useAuthState(auth);

  const registerUser = (data: Client) => {
    registerWithEmailAndPassword(data.username, data.email, data.firstPassword);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate('/MainPage');
  }, [user, navigate]);

  if (user) return <Navigate to="/MainPage" replace />;

  return loading ? (
    <div>{strings.loading}</div>
  ) : (
    <section className={classes.section}>
      <h1 className={classes.title}>{strings.singup_page_title}</h1>
      <form
        className={classes.form}
        onSubmit={handleSubmit(registerUser)}
        noValidate
      >
        <Stack spacing={2} sx={{ minWidth: '300px' }}>
          <TextFieldElement
            name="username"
            label={strings.name}
            control={control}
            required
            fullWidth
            helperText=" "
          />
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
            label={strings.password}
            control={control}
            helperText=" "
          />
          <PasswordRepeatElement
            name="secondPassword"
            label={strings.password_repeat}
            passwordFieldName="firstPassword"
            control={control}
            helperText=" "
          />
          <Button
            sx={{
              '&&': {
                width: '15%',
                minWidth: '130px',
                marginLeft: 'auto',
                marginRight: 'auto',
              },
            }}
            variant="contained"
            type="submit"
            disabled={!isValid}
          >
            {strings.signup_button}
          </Button>
        </Stack>
      </form>
      <ToastContainer />
    </section>
  );
}

export default SignUpPage;
