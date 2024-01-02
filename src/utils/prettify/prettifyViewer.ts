import {
  handleBrackets,
  handleColon,
  handleComma,
  handleItemsViewer,
  handleParenthesis,
  handleReference,
  levelLines,
  removeSpaces,
} from './prettifyHelper';

function prettifyViewer(input: string): string {
  return levelLines(
    handleItemsViewer(
      handleBrackets(
        handleColon(
          handleComma(handleReference(handleParenthesis(removeSpaces(input))))
        )
      )
    )
  );
}

export default prettifyViewer;
