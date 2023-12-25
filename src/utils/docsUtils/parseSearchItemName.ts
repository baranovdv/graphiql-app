export default function parseSearchItemName(searchName: string): string {
  const isBrackets: boolean = searchName.charAt(0) === '[';

  return isBrackets ? searchName.slice(1, searchName.length - 1) : searchName;
}
