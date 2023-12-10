import { object, string } from 'yup';

const userSchema = object().shape({
  username: string()
    .required('поле не долно быть пустым')
    .test(
      'is-capital',
      'логин должнен начинаться с заглавной буквы',
      (value) => {
        if (!value) return true;
        const firstLetter = value.charAt(0);
        return firstLetter === firstLetter.toUpperCase();
      }
    ),
  email: string()
    .required('поле не долно быть пустым')
    .email(
      'электронная почта должна быть действительным адресом электронной почты.'
    )
    .test(
      'has-domain',
      'электронная почта должна содержать доменное имя.',
      (value) => {
        if (!value) return true;
        const domain = value.split('@')[1];
        return Boolean(domain && domain.includes('.'));
      }
    ),
  firstPassword: string()
    .required('поле не долно быть пустым')
    .matches(
      /^(?=.*\p{Ll})(?=.*\p{Lu})(?=.*\d)(?=.*[@$!%*?&])[\p{L}\d@$!%*?&."']{8,}$/u,
      'пароль должен содержать 8 символов: одну заглавную букву, одну строчную букву, одну цифру и один символ специального регистра.'
    ),
  secondPassword: string()
    .required('поле не долно быть пустым')
    .test('passwords-match', 'пароли должны совпадать', function (value) {
      return this.parent.firstPassword === value;
    }),
});

const fieldsForRegistration = [
  { id: 'username', type: 'text', label: 'ЛОГИН:', autoComplete: 'true' },
  { id: 'email', type: 'text', label: 'ЭМЕЙЛ:', autoComplete: 'true' },
  {
    id: 'firstPassword',
    type: 'password',
    label: 'ПАРОЛЬ:',
    autoComplete: 'false',
  },
  {
    id: 'secondPassword',
    type: 'password',
    label: 'ПОВТОРИТЕ ПАРОЛЬ:',
    autoComplete: 'false',
  },
];

const fieldsForLogin = [
  { id: 'email', type: 'text', label: 'ЭМЕЙЛ:', autoComplete: 'true' },
  {
    id: 'firstPassword',
    type: 'password',
    label: 'ПАРОЛЬ:',
    autoComplete: 'false',
  },
];

const loginSchema = object().shape({
  email: string()
    .required('поле не долно быть пустым')
    .email(
      'электронная почта должна быть действительным адресом электронной почты.'
    )
    .test(
      'has-domain',
      'электронная почта должна содержать доменное имя.',
      (value) => {
        if (!value) return true;
        const domain = value.split('@')[1];
        return Boolean(domain && domain.includes('.'));
      }
    ),
  firstPassword: string().required('поле не должно быть пустым'),
});

export { fieldsForRegistration, userSchema, loginSchema, fieldsForLogin };
