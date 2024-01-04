const TAB_SIZE = '  ';

export function removeSpaces(str: string): string {
  if (str)
    return str
      .replace(/\n/g, ' ')
      .split(' ')
      .filter((item) => item.trim() !== '')
      .join(' ');
  return '';
}

export function handleParenthesis(str: string): string {
  return str
    .replace(/\(\s/g, '(')
    .replace(/\s\(/g, '(')
    .replace(/\s\)/g, ')')
    .replace(/\)\s/g, ')')
    .replace(/\)/g, ') ');
}

export function handleColon(str: string): string {
  return str.replace(/\s:/g, ':').replace(/:\s/g, ':').replace(/:/g, ': ');
}

export function handleComma(str: string): string {
  return str.replace(/\s,/g, ',').replace(/,\s/g, ',').replace(/,/g, ', ');
}

export function handleReference(str: string): string {
  return str.replace(/\s\$/g, '$').replace(/\$\s/g, '$');
}

export function handleBrackets(str: string): string {
  return str
    .replace(/\{\s/g, '{')
    .replace(/\s\{/g, '{')
    .replace(/\{/g, ' {')
    .replace(/\{/g, '{\n')
    .replace(/\}\s/g, '}')
    .replace(/\}/g, '\n}')
    .replace(/\[/g, '[\n')
    .replace(/\]/g, '\n]');
}

export function handleItemsEditor(str: string): string {
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

export function handleItemsViewer(str: string): string {
  return str
    .split('\n')
    .map((item) => {
      if (item.includes(',')) return item.replace(/,\s/g, ',\n');
      if (item.includes('{')) return item;
      if (item.includes('}')) return item;
      return item;
    })
    .flat()
    .filter((item) => item.trim() !== '')
    .join('\n');
}

export function levelLines(str: string): string {
  let level = 0;
  return str
    .split('\n')
    .map((line) => {
      if (line.includes('}') || line.includes(']')) level -= 1;

      const newLine = `${TAB_SIZE.repeat(level)}${line}`;

      if (
        (line.includes('}') && level === 0) ||
        (line.includes(']') && level === 0)
      ) {
        if (line.includes('{') || line.includes('[')) level += 1;
        return newLine.replace(/\}/g, '}\n').replace(/\]/g, ']\n');
      }

      if (line.includes('{') || line.includes('[')) level += 1;
      return newLine;
    })
    .join('\n');
}
