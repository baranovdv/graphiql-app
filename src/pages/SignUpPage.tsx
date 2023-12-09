import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Client } from '../interfaces/interfaces';
import Label from '../components/label/Label';
import Input from '../components/input/Input';
import { FieldsForRegistration, Schema } from '../utils/utils';
import classes from '../styles/SingUp.module.css';
import { useLocale } from '../context/StoreContext';

function SignUpPage() {
  const { strings } = useLocale();

  const form = useForm({
    defaultValues: async () => {
      return {
        username: '',
        email: '',
        firstPassword: '',
        secondPassword: '',
      };
    },
    resolver: yupResolver(Schema()),
    mode: 'onChange',
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  const onSubmit = (data: Client) => {
    console.log(data);
  };

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>{strings.singup_page_title}</h1>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {FieldsForRegistration().map((field) => (
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
          value={strings.signup_button}
          disabled={!isValid}
        />
      </form>
    </main>
  );
}

export default SignUpPage;
