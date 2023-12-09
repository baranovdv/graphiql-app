import { object, string } from 'yup';
import { useLocale } from '../context/StoreContext';

function Schema() {
  const { strings } = useLocale();

  return object().shape({
    username: string()
      .required(strings.field_required)
      .test('is-capital', strings.name_capitalized, (value) => {
        if (!value) return true;
        const firstLetter = value.charAt(0);
        return firstLetter === firstLetter.toUpperCase();
      }),
    email: string()
      .required(strings.field_required)
      .email(strings.email_valid)
      .test('has-domain', strings.email_domain, (value) => {
        if (!value) return true;
        const domain = value.split('@')[1];
        return Boolean(domain && domain.includes('.'));
      }),
    firstPassword: string()
      .required(strings.field_required)
      .matches(
        /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*\d)(?=.*[@$!%*?&])[\p{L}\d@$!%*?&."']{8,}$/u,
        strings.password_rules
      ),
    secondPassword: string()
      .required(strings.field_required)
      .test('passwords-match', strings.password_match, function (value) {
        return this.parent.firstPassword === value;
      }),
  });
}
function FieldsForRegistration() {
  const { strings } = useLocale();

  return [
    {
      id: 'username',
      type: 'text',
      label: strings.login,
      autoComplete: 'true',
    },
    { id: 'email', type: 'text', label: strings.email, autoComplete: 'true' },
    {
      id: 'firstPassword',
      type: 'password',
      label: strings.password,
      autoComplete: 'false',
    },
    {
      id: 'secondPassword',
      type: 'password',
      label: strings.password_repeat,
      autoComplete: 'false',
    },
  ];
}

export { FieldsForRegistration, Schema };
