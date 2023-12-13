import Footer from '../components/Footer/Footer';
import EditorView from '../components/ui/EditorView/EditorView';
import InputURL from '../components/ui/InputURL/InputURL';
import VarsHeaders from '../components/ui/VarsHeaders/VarsHeaders';
import classes from '../styles/MainPage.module.css';

export function MainPage() {
  return (
    <>
      {/* <Header /> */}
      <section className={classes.container}>
        <InputURL gridAreaProp="navbar" />
        <EditorView gridAreaProp="editor" />
        <EditorView gridAreaProp="viewer" />
        <VarsHeaders gridAreaProp="vars" />
      </section>
      <Footer />
    </>
  );
}

export default MainPage;
