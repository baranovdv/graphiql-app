import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Aside from '../../components/Aside/Aside';
import EditorView from '../../components/ui/EditorView/EditorView';
import InputURL from '../../components/ui/InputURL/InputURL';
import VarsHeaders from '../../components/ui/VarsHeaders/VarsHeaders';
import classes from './MainPage.module.css';

export function MainPage() {
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const handleToggleDocs = () => {
    setIsDocsOpen(!isDocsOpen);
  };

  return (
    <section className={classes.container}>
      <InputURL gridAreaProp="navbar" toggleDocs={handleToggleDocs} />
      <EditorView gridAreaProp="editor" />
      <EditorView gridAreaProp="viewer" />
      <VarsHeaders gridAreaProp="vars" />
      <Aside isOpen={isDocsOpen} toggleDocs={handleToggleDocs} />
      <ToastContainer />
    </section>
  );
}

export default MainPage;
