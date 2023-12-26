import { test } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import {
  LocaleProvider,
  useLocale,
  useLocaleDispatch,
} from '../context/StoreContext';
import initialStore from '../context/initialStore';

const expectObject = {
  currentLanguage: 'ru',
  strings: {
    about_project: 'О проекте',
    about_project_text:
      'Наша команда разработала инновационный проект, который значительно упрощает взаимодействие с GraphQL. GraphQL - это не просто язык запросов для API, это целая среда выполнения, которая позволяет вам эффективно работать с вашими существующими данными. Одним из ключевых преимуществ GraphQL является его полное и понятное описание данных в вашем API. Это обеспечивает клиентам возможность запрашивать именно ту информацию, которая им необходима, исключая лишние данные. Это не только упрощает процесс работы с API, но и делает его более эффективным. В целом, наш проект предлагает решение, которое делает взаимодействие с GraphQL более простым и эффективным, открывая новые возможности для разработчиков и пользователей. Мы верим, что это будет полезным дополнением к любому проекту, который использует GraphQL.',
    email: 'Email:',
    email_domain: 'Электронная почта должна содержать доменное имя',
    email_valid: 'Email должен быть валидным',
    field_required: 'Обязательное поле',
    login: 'Логин:',
    logout: 'Выйти',
    main_page_title: 'Главная страница',
    name_capitalized: 'Логин должен начинаться с большой буквы',
    our_team: 'Наша команда',
    page404_message: 'Это страница 404',
    password: 'Пароль:',
    password_match: 'Пароли должны совпадать',
    password_repeat: 'Повторите пароль:',
    password_rules:
      'Пароль должен содержать хотя бы 8 символов: одну заглавную букву, одну строчную букву, одну цифру и один символ специального регистра.',
    signin_button: 'Войти',
    signup_button: 'Регистрация',
    singin_page_title: 'Войти',
    singup_page_title: 'Регистрация',
  },
};

test('LocaleProvider provides context correctly', async () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <LocaleProvider>{children}</LocaleProvider>
  );

  const { result } = renderHook(
    () => {
      const store = useLocale();
      const dispatch = useLocaleDispatch();
      return { store, dispatch };
    },
    { wrapper }
  );

  expect(result.current.store).toEqual(initialStore);

  // Проверьте, что диспетчер работает правильно
  act(() => {
    result.current.dispatch({
      type: 'change_language',
      payload: 'ru',
    });
  });

  expect(result.current.store).toEqual(expectObject);
});
