import {
  handleBrackets,
  handleColon,
  handleComma,
  handleItemsEditor,
  handleParenthesis,
  handleReference,
  levelLines,
  removeSpaces,
} from './prettifyHelper';

function prettifyEditor(input: string): string {
  return levelLines(
    handleItemsEditor(
      handleBrackets(
        handleColon(
          handleComma(handleReference(handleParenthesis(removeSpaces(input))))
        )
      )
    )
  );
}

export default prettifyEditor;
