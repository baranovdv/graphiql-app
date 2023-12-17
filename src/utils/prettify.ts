const TAB_SIZE = '    ';

function removeSpaces(str: string): string {
  return str
    .replace(/\n/g, '')
    .split(' ')
    .filter((item) => item.trim() !== '')
    .join(' ');
}

function handleParenthesis(str: string): string {
  return str
    .replace(/\(\s/g, '(')
    .replace(/\s\(/g, '(')
    .replace(/\s\)/g, ')')
    .replace(/\)\s/g, ')')
    .replace(/\)/g, ') ');
}

function handleColon(str: string): string {
  return str.replace(/\s:/g, ':').replace(/:\s/g, ':').replace(/:/g, ': ');
}

function handleComma(str: string): string {
  return str.replace(/\s,/g, ',').replace(/,\s/g, ',').replace(/,/g, ', ');
}

function handleReference(str: string): string {
  return str.replace(/\s\$/g, '$').replace(/\$\s/g, '$');
}

function handleBrackets(str: string): string {
  return str
    .replace(/\{\s/g, '{')
    .replace(/\s\{/g, '{')
    .replace(/\{/g, ' {')
    .replace(/\{/g, '{\n')
    .replace(/\}\s/g, '}')
    .replace(/\}/g, '\n}');
}

function handleItems(str: string): string {
  return str
    .split('\n')
    .map((item) => {
      if (item.match(/[a-z]\s\{/g)) {
        const array = item.split(' ');
        array[array.length - 2] = `${array[array.length - 2]} ${
          array[array.length - 1]
        }`;
        array.pop();
        return array;
      }
      if (item.includes('{')) return item;
      if (item.includes('}')) return item;
      return item.split(' ');
    })
    .flat()
    .filter((item) => item.trim() !== '')
    .join('\n');
}

function levelLines(str: string): string {
  let level = 0;
  return str
    .split('\n')
    .map((line) => {
      if (line.includes('}')) level -= 1;

      const newLine = `${TAB_SIZE.repeat(level)}${line}`;

      if (line.includes('}') && level === 0) {
        if (line.includes('{')) level += 1;
        return newLine.replace(/\}/g, '}\n');
      }

      if (line.includes('{')) level += 1;
      return newLine;
    })
    .join('\n');
}

function prettify(input: string): string {
  return levelLines(
    handleItems(
      handleBrackets(
        handleColon(
          handleComma(handleReference(handleParenthesis(removeSpaces(input))))
        )
      )
    )
  );
}

export default prettify;
