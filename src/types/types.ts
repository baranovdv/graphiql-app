export type AppLanguages = 'ru' | 'en';

export type ActionType = 'change_language';

export type LocaleData = Record<StringsTypes, string>;

export type MainPageGridAreas = 'navbar' | 'editor' | 'viewer' | 'vars';

export type StringsTypes =
  | 'signin_button'
  | 'signup_button'
  | 'page404_message'
  | 'logout'
  | 'main_page_title'
  | 'singin_page_title'
  | 'singup_page_title'
  | 'about_project'
  | 'about_project_text'
  | 'our_team'
  | 'login'
  | 'password'
  | 'password_repeat'
  | 'email'
  | 'name_capitalized'
  | 'email_valid'
  | 'email_domain'
  | 'password_rules'
  | 'password_match'
  | 'field_required';
