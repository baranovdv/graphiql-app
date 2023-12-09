import { useLocale } from '../context/StoreContext';

function Page404() {
  const { strings } = useLocale();

  return <p>{strings.page404_message}</p>;
}
export default Page404;
