import { object, string } from 'yup';
import { useLocale } from '../../context/StoreContext';

export default function RegistrationSchema() {
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
        /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*\d)(?=.*[@$!%*?&*()_+])[\p{L}\d@$!%*?&*()_+."']{8,}$/u,
        strings.password_rules
      ),
    secondPassword: string()
      .required(strings.field_required)
      .test(
        'passwords-match',
        strings.password_match,
        function checkMatch(value) {
          return this.parent.firstPassword === value;
        }
      ),
  });
}
