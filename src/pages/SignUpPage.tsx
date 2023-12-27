import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    if (loading) return;
    if (user) navigate('/MainPage');
  }, [user, loading]);

  return (
    <section className={classes.section}>
      <h1 className={classes.title}>{strings.singup_page_title}</h1>
      <form
        className={classes.form}
        onSubmit={handleSubmit(registerUser)}
        noValidate
      >
        <Stack
          className="flex flex-col justify-center"
          spacing={2}
          sx={{ minWidth: '320px' }}
        >
          <TextFieldElement
            name="username"
            label="Name"
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
            label="Password"
            control={control}
            helperText=" "
          />
          <PasswordRepeatElement
            name="secondPassword"
            label="Password Repeat"
            passwordFieldName="firstPassword"
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
    </section>
  );
}

export default SignUpPage;
