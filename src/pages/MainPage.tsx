import Footer from '../components/Footer/Footer';
import styles from '../styles/Welcome.module.css';
import { useLocale } from '../context/StoreContext';

function MainPage() {
  const { strings } = useLocale();
  
  return (
    <>
      <main className={styles.main}>
        <p>{strings.main_page_title}</p>
      </main>
      <Footer />
    </>
  );
}
export default MainPage;
