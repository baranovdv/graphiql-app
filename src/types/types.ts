/* v8 ignore start */
export type AppLanguages = 'Ру' | 'En';

export type ActionType = 'change_language';

export type LocaleData = Record<StringsTypes, string>;

export type MainPageGridAreas = 'navbar' | 'editor' | 'viewer' | 'vars';

export type HLTextAreaTypes = MainPageGridAreas | 'headers';

export type StringsTypes =
  | 'welcome_page_title_1'
  | 'welcome_page_title_2'
  | 'welcome_page_subtitle'
  | 'welcome_page_subtitle_logged'
  | 'signin_button'
  | 'signup_button'
  | 'page404_message'
  | 'logout'
  | 'name'
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
  | 'field_required'
  | 'error'
  | 'error_message'
  | 'error_data'
  | 'no_docs'
  | 'loading'
  | 'login_google'
  | 'no_acc_1'
  | 'no_acc_2'
  | 'no_acc_3'
  | 'show_less'
  | 'show_more';

export type BtnBGColors = 'transparent' | 'orange' | 'green' | 'red' | 'blue';
/* v8 ignore stop */
