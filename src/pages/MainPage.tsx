import { useState } from 'react';
import Aside from '../components/Aside/Aside';
import Footer from '../components/Footer/Footer';
import EditorView from '../components/ui/EditorView/EditorView';
import InputURL from '../components/ui/InputURL/InputURL';
import VarsHeaders from '../components/ui/VarsHeaders/VarsHeaders';
import classes from '../styles/MainPage.module.css';

export function MainPage() {
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const handleToggleDocs = () => {
    setIsDocsOpen(!isDocsOpen);
  };

  return (
    <>
      {/* <Header /> */}
      <section className={classes.container}>
        <InputURL gridAreaProp="navbar" toggleDocs={handleToggleDocs} />
        <EditorView gridAreaProp="editor" />
        <EditorView gridAreaProp="viewer" />
        <VarsHeaders gridAreaProp="vars" />
        <Aside isOpen={isDocsOpen} />
      </section>
      <Footer />
    </>
  );
}

export default MainPage;
