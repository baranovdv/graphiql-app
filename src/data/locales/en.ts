import { StringsTypes } from '../../types/types';

const enStrings: Record<StringsTypes, string> = {
  signin_button: 'SignIn',
  signup_button: 'SignUp',
  page404_message: 'This is 404 Page',
  logout: 'Logout',
  main_page_title: 'Main Page',
  singin_page_title: 'Login',
  singup_page_title: 'Registration',
  about_project: 'About project',
  about_project_text:
    "Our team has developed an innovative project that makes interacting with GraphQL much easier. GraphQL isn't just an API query language, it's an entire runtime that allows you to work efficiently with your existing data. One of the key benefits of GraphQL is its complete and clear description of the data in your API. This ensures that customers can request exactly the information they need, eliminating unnecessary data. This not only simplifies the process of working with the API, but also makes it more efficient. Overall, our project provides a solution that makes interacting with GraphQL easier and more efficient, opening up new possibilities for developers and users. We believe this will be a useful addition to any project that uses GraphQL.",
  our_team: 'Our team',
  login: 'Login:',
  name_capitalized: 'Login should be capitalized',
  password: 'Password:',
  password_match: 'Passwords must match',
  password_repeat: 'Repeat password:',
  password_rules:
    'Password must have at least 8 characters: 1 digit, 1 lowercase letter, 1 uppercase letter, 1 special letter',
  email: 'Email:',
  email_valid: 'Email should be valid',
  email_domain: 'Email should contain domain',
  field_required: 'Required',
};

export default enStrings;
