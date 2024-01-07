import { object, string } from 'yup';
import { useLocale } from '../../context/StoreContext';

export default function LoginSchema() {
  const { strings } = useLocale();

  return object().shape({
    email: string()
      .required(strings.field_required)
      .email(strings.email_valid)
      .test('has-domain', strings.email_domain, (value) => {
        if (!value) return true;
        const domain = value.split('@')[1];
        return Boolean(domain && domain.includes('.'));
      }),
    firstPassword: string().required('поле не должно быть пустым'),
  });
}
