import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Client } from '../types/types';
import Label from '../components/label/Label';
import Input from '../components/input/Input';
import { fieldsForRegistration, userSchema } from '../utils/utils';
import classes from '../styles/SingUp.module.css';
import Footer from '../components/Footer/Footer';
import { registerWithEmailAndPassword, auth } from '../firebase';

function SignUpPage() {
  const form = useForm({
    defaultValues: async () => {
      return {
        username: '',
        email: '',
        firstPassword: '',
        secondPassword: '',
      };
    },
    resolver: yupResolver(userSchema),
    mode: 'onChange',
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;
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
    <>
      <main className={classes.main}>
        <h1 className={classes.title}>Регистрация</h1>
        <form
          className={classes.form}
          onSubmit={handleSubmit(registerUser)}
          noValidate
        >
          {fieldsForRegistration.map((field) => (
            <Label className={classes.field} htmlFor={field.id} key={field.id}>
              {field.label}
              <div className={classes.wrapperInput}>
                <Input {...field} register={register} />
                {errors[field.id as keyof Client]?.message && (
                  <p className={classes.error}>
                    {errors[field.id as keyof Client]?.message}
                  </p>
                )}
              </div>
            </Label>
          ))}
          <input
            className={classes.button}
            type="submit"
            value="РЕГИСТРАЦИЯ"
            disabled={!isValid}
          />
        </form>
      </main>
      <Footer />
    </>
  );
}

export default SignUpPage;
