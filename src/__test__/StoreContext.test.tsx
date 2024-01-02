import { expect, test } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import {
  LocaleProvider,
  useLocale,
  useLocaleDispatch,
} from '../context/StoreContext';
import initialStore from '../context/initialStore';

const expectObject = {
  currentLanguage: 'Ру',
  strings: {
    welcome_page_title_1: 'Это GraphQL приложение от команды',
    welcome_page_title_2: '!',
    welcome_page_subtitle: 'Привет! Пожалуйста зарегистрируйся или войди:',
    welcome_page_subtitle_logged: 'Привет! Пожалуйста перейди на главную:',
    signin_button: 'Войти',
    signup_button: 'Регистрация',
    page404_message: 'Это страница 404',
    logout: 'Выйти',
    name: 'Имя',
    main_page_title: 'Главная',
    singin_page_title: 'Вход в Аккаунт',
    singup_page_title: 'Регистрация',
    about_project: 'О проекте',
    about_project_text:
      'Наша команда разработала инновационный проект, который значительно упрощает взаимодействие с GraphQL. GraphQL - это не просто язык запросов для API, это целая среда выполнения, которая позволяет вам эффективно работать с вашими существующими данными. Одним из ключевых преимуществ GraphQL является его полное и понятное описание данных в вашем API. Это обеспечивает клиентам возможность запрашивать именно ту информацию, которая им необходима, исключая лишние данные. Это не только упрощает процесс работы с API, но и делает его более эффективным. В целом, наш проект предлагает решение, которое делает взаимодействие с GraphQL более простым и эффективным, открывая новые возможности для разработчиков и пользователей. Мы верим, что это будет полезным дополнением к любому проекту, который использует GraphQL.',
    our_team: 'Наша команда',
    login: 'Логин:',
    name_capitalized: 'Логин должен начинаться с большой буквы',
    password: 'Пароль:',
    password_match: 'Пароли должны совпадать',
    password_repeat: 'Повторите пароль:',
    password_rules:
      'Пароль должен содержать хотя бы 8 символов: одну заглавную букву, одну строчную букву, одну цифру и один символ специального регистра.',
    email: 'Email:',
    email_valid: 'Email должен быть валидным',
    email_domain: 'Электронная почта должна содержать доменное имя',
    field_required: 'Обязательное поле',
    error: 'Ошибка!',
    error_message: 'К сожалению, запрашиваемая вами страница не найдена',
    error_data: 'Ошибка данных',
    no_docs: 'Нет документации',
    loading: 'Загрузка...',
    login_google: 'Вход с помощью Google',
    no_acc_1: 'Нет аккаунта?',
    no_acc_2: 'Зарегистрируйтесь',
    no_acc_3: 'здесь.',
    show_less: 'Показать меньше',
    show_more: 'Показать больше',
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
      payload: 'Ру',
    });
  });

  expect(result.current.store).toEqual(expectObject);
});
