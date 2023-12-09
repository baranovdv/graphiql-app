import { useLocale } from '../context/StoreContext';

function MainPage() {
  const { strings } = useLocale();

  return <p>{strings.main_page_title}</p>;
}
export default MainPage;
